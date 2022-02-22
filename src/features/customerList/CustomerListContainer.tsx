import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { SortingRule } from 'react-table';
import format from 'date-fns/format';
import { useHistory, useLocation } from 'react-router-dom';

import { ALL_CUSTOMERS_QUERY, CUSTOMERS_QUERY } from './queries';
import { getCustomersData } from './utils';
import { CUSTOMERS, CUSTOMERSVariables as CUSTOMERS_VARS } from './__generated__/CUSTOMERS';
import CustomerList from './CustomerList';
import { usePagination } from '../../common/utils/usePagination';
import { useRecoilBackendSorting } from '../../common/utils/useBackendSorting';
import { getProfileToken } from '../../common/utils/auth';
import { usePrevious } from '../../common/utils/usePrevious';
import { ApplicationData } from '../applicationList/utils';
import { orderByToString } from '../../common/utils/recoil';
import useListTableFilters from './customerListTableFilters/useListTableFilters';
import { createIntervalWithSilentError, createDate } from './customerListTableFilters/utils';
import { ALL_CUSTOMERS, ALL_CUSTOMERSVariables as ALL_CUSTOMERS_VARS } from './__generated__/ALL_CUSTOMERS';
import { useTableExport } from '../../common/utils/useTableExport';

export enum SearchBy {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  ADDRESS = 'address',
  STICKER_NUMBER = 'stickerNumber',
  BOAT_REGISTRATION_NUMBER = 'boatRegistrationNumber',
}

const searchByAtom = atom<SearchBy>({
  key: 'CustomerListContainer_searchByAtom',
  default: SearchBy.LAST_NAME,
});

const searchValAtom = atom<string>({
  key: 'CustomerListContainer_searchValAtom',
  default: '',
});

const sortByAtom = atom<SortingRule<ApplicationData>[]>({
  key: 'CustomerListContainer_sortByAtom',
  default: [{ id: 'name', desc: false }],
});

const orderBySelector = selector<string | undefined>({
  key: 'CustomerListContainer_orderBySelector',
  get: ({ get }) => {
    const modifiedOrderByAtom = get(sortByAtom).map((sort) => {
      if (sort.id === 'name') {
        return {
          ...sort,
          id: 'lastName',
        };
      }

      return sort;
    });

    return orderByToString(modifiedOrderByAtom);
  },
});

const CustomerListContainer = () => {
  usePersistedSearch();

  const { t } = useTranslation();

  const [customerListTableFilters] = useListTableFilters();

  const [searchBy, setSearchBy] = useRecoilState(searchByAtom);
  const [searchVal, setSearchVal] = useRecoilState(searchValAtom);

  const { cursor, pageSize, pageIndex, getPageCount, goToPage } = usePagination();
  const { sortBy, handleSortedColsChange } = useRecoilBackendSorting(sortByAtom, () => goToPage(0));
  const orderBy = useRecoilValue(orderBySelector);

  const [debouncedSearchVal] = useDebounce(searchVal, 500, {
    equalityFn: (prev, next) => prev === next,
    leading: true,
  });

  const prevSearchBy = usePrevious(searchBy);

  const { dateInterval, ...delegatedCustomerListTableFilters } = customerListTableFilters;
  const { start, end } = createIntervalWithSilentError(dateInterval);
  const profileToken = getProfileToken();
  const customersVars: CUSTOMERS_VARS = {
    first: pageSize,
    after: cursor,
    orderBy,
    [searchBy]: prevSearchBy === searchBy ? debouncedSearchVal : searchVal,
    ...delegatedCustomerListTableFilters,
    startDate: start ? format(createDate(start), 'yyyy-MM-dd') : start,
    endDate: end ? format(createDate(end), 'yyyy-MM-dd') : end,
    apiToken: profileToken,
  };

  const { data, loading, refetch } = useQuery<CUSTOMERS, CUSTOMERS_VARS>(CUSTOMERS_QUERY, {
    variables: customersVars,
    fetchPolicy: 'no-cache',
  });

  const { exportTable, isExporting } = useTableExport({
    exportType: 'customers',
    fileType: 'xlsx',
    fetchCallback: async (apolloClient, paginationParams) => {
      const { data } = await apolloClient.query<ALL_CUSTOMERS, ALL_CUSTOMERS_VARS>({
        query: ALL_CUSTOMERS_QUERY,
        variables: {
          apiToken: getProfileToken(),
          ...customersVars,
          ...paginationParams,
        },
        fetchPolicy: 'cache-first',
      });
      return data.berthProfiles ?? {};
    },
  });

  const handleCustomersExport = async () => {
    await exportTable();
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    // Prevent hook running on initial mount because it would force to first page on landing with direct url
    // regardless of the page param
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Go to the first page when search values change.
      goToPage(0);
    }
  }, [searchVal, searchBy, goToPage]);

  const tableData = getCustomersData(data);

  return (
    <CustomerList
      loading={loading}
      data={tableData}
      onSortedColsChange={handleSortedColsChange}
      sortBy={sortBy}
      pagination={{
        pageIndex: pageIndex,
        pageCount: getPageCount(data?.berthProfiles?.count),
        onPageChange: ({ selected }) => goToPage(selected),
      }}
      tableTools={{
        refetch,
        searchVal,
        searchBy,
        setSearchVal,
        setSearchBy,
        handleCustomersExport,
        isExporting,
        searchByOptions: [
          { value: SearchBy.FIRST_NAME, label: t('common.firstName') },
          { value: SearchBy.LAST_NAME, label: t('common.lastName') },
          { value: SearchBy.EMAIL, label: t('common.email') },
          { value: SearchBy.ADDRESS, label: t('common.address') },
          { value: SearchBy.STICKER_NUMBER, label: t('common.terminology.stickerNumber') },
          { value: SearchBy.BOAT_REGISTRATION_NUMBER, label: t('common.terminology.registrationNumber') },
        ],
      }}
    />
  );
};

const PERSISTED_SEARCH_SESSION_STORAGE_KEY = 'berth-reservations-admin/persistedCustomerListContainer';

function usePersistedSearch() {
  const { search, pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    // Whenever search changes, persist it for the duration of the session
    sessionStorage.setItem(PERSISTED_SEARCH_SESSION_STORAGE_KEY, search);
  }, [search]);

  useEffect(() => {
    const persistedSearch = sessionStorage.getItem(PERSISTED_SEARCH_SESSION_STORAGE_KEY);

    // If search is empty and we have a persisted search, apply the persisted
    // search
    if (!search && persistedSearch) {
      history.replace(`${pathname}${persistedSearch}`);
    }
  }, [history, pathname, search]);
}

export default CustomerListContainer;

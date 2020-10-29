import React from 'react';
import { useTranslation } from 'react-i18next';
import { SortingRule } from 'react-table';
import { toast } from 'react-toastify';

import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import ApplicationDetails from '../../common/applicationDetails/ApplicationDetails';
import TableFilters from '../../common/tableFilters/TableFilters';
import Pagination from '../../common/pagination/Pagination';
import Table, { Column, COLUMN_WIDTH } from '../../common/table/Table';
import { ApplicationData, getDraftedOffers } from './utils';
import { BERTH_APPLICATIONS } from './__generated__/BERTH_APPLICATIONS';
import InternalLink from '../../common/internalLink/InternalLink';
import { formatDate } from '../../common/utils/format';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../common/utils/constants';
import { ApplicationStatus } from '../../@types/__generated__/globalTypes';
import { queueFeatureFlag } from '../../common/utils/featureFlags';
import ApplicationStateTableTools from '../../common/tableTools/applicationStateTableTools/ApplicationStateTableTools';
import ApplicationListTools from '../applicationListTools/ApplicationListTools';
import hdsToast from '../../common/toast/hdsToast';

interface Order {
  orderId: string;
  email: string;
}

export interface ApplicationListProps {
  data: BERTH_APPLICATIONS | undefined;
  getPageCount: (connectionsCount: number | null | undefined) => number;
  goToPage: (pageIndex: number) => void;
  handleDeleteLease: (id: string) => Promise<void>;
  onSortedColsChange: (sortedCol: SortingRule<ApplicationData>[]) => void;
  sortBy: SortingRule<ApplicationData>[];
  isDeleting: boolean;
  isSubmittingApproveOrders: boolean;
  loading: boolean;
  onlySwitchApps?: boolean;
  pageIndex: number;
  setOnlySwitchApps: (onlySwitchApps?: boolean) => void;
  tableData: ApplicationData[];
  count?: number;
  statusFilter?: ApplicationStatus;
  onStatusFilterChange(statusFilter?: ApplicationStatus): void;
  handleApproveOrders(orders: Order[]): Promise<void>;
}

type ColumnType = Column<ApplicationData>;

const ApplicationList = ({
  data,
  getPageCount,
  goToPage,
  handleDeleteLease,
  sortBy,
  onSortedColsChange,
  isSubmittingApproveOrders,
  handleApproveOrders,
  isDeleting,
  loading,
  onlySwitchApps,
  pageIndex,
  setOnlySwitchApps,
  tableData,
  count,
  statusFilter,
  onStatusFilterChange,
}: ApplicationListProps) => {
  const { t, i18n } = useTranslation();

  const rawColumns: (ColumnType | undefined)[] = [
    {
      Cell: ({
        cell: {
          row: {
            original: { id, firstName, lastName },
          },
        },
      }) => (
        <InternalLink to={`/applications/${id}`}>
          {firstName} {lastName}
        </InternalLink>
      ),
      Header: t('common.name') as string,
      accessor: 'id',
      filter: 'exact',
      disableSortBy: true,
      width: COLUMN_WIDTH.M,
      minWidth: COLUMN_WIDTH.M,
    },
    {
      Cell: ({ cell: { value } }) =>
        value
          ? t('applicationList.applicationType.switchApplication')
          : t('applicationList.applicationType.newApplication'),
      Header: t('applicationList.tableHeaders.applicationType') as string,
      accessor: 'isSwitch',
      filter: 'exact',
      disableSortBy: true,
      width: COLUMN_WIDTH.XS,
      minWidth: COLUMN_WIDTH.XS,
    },
    {
      Cell: ({ cell }) => formatDate(cell.value, i18n.language),
      Header: t('applicationList.tableHeaders.pvm') as string,
      accessor: 'createdAt',
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    queueFeatureFlag()
      ? {
          Header: t('applicationList.tableHeaders.queue') as string,
          accessor: 'queue',
          disableSortBy: true,
          width: COLUMN_WIDTH.XS,
          minWidth: COLUMN_WIDTH.XS,
        }
      : undefined,
    {
      Header: t('applicationList.tableHeaders.municipality') as string,
      accessor: 'municipality',
      disableSortBy: true,
      width: COLUMN_WIDTH.S,
      minWidth: COLUMN_WIDTH.S,
    },
    {
      Cell: ({ cell: { value } }) => (
        <StatusLabel
          type={APPLICATION_STATUS[value as ApplicationStatus].type}
          label={t(APPLICATION_STATUS[value as ApplicationStatus].label)}
        />
      ),
      Header: t('applicationList.tableHeaders.status') as string,
      accessor: 'status',
      disableSortBy: true,
      width: COLUMN_WIDTH.M,
      minWidth: COLUMN_WIDTH.M,
    },
    {
      Cell: ({ cell }) =>
        cell.value && (
          <InternalLink to={`/harbors/${cell.value.harborId}`}>
            {[cell.value.harborName, cell.value.pierIdentifier, cell.value.berthNum].filter(Boolean).join(' ')}
          </InternalLink>
        ),
      Header: t('applicationList.tableHeaders.lease') as string,
      accessor: 'lease',
      disableSortBy: true,
      width: COLUMN_WIDTH.XL,
      minWidth: COLUMN_WIDTH.XL,
    },
  ];
  const columns: ColumnType[] = rawColumns.filter((column): column is ColumnType => column !== undefined);

  return (
    <PageContent>
      <PageTitle title={t('applicationList.title')} />
      <Table
        data={tableData}
        loading={loading || isDeleting}
        columns={columns}
        renderSubComponent={(row) => <ApplicationDetails {...row.original} handleDeleteLease={handleDeleteLease} />}
        renderMainHeader={() => {
          const filters = [
            {
              value: true,
              label: t('applicationList.tableHeaders.switchFilter'),
            },
            {
              value: false,
              label: t('applicationList.tableHeaders.newApplicationFilter'),
            },
          ];

          return (
            <TableFilters
              filters={filters}
              activeFilters={filters.map((filter) => filter.value).filter((value) => value === onlySwitchApps)}
              handleSetFilter={(filter) => {
                goToPage(0);
                setOnlySwitchApps(filter);
              }}
            />
          );
        }}
        renderTableToolsTop={({ selectedRows }, { resetSelectedRows }) => {
          const offers = getDraftedOffers(selectedRows);
          const offersWithoutPlacesCount = selectedRows.filter((row) => !row.lease).length;

          let toastId;
          if (offersWithoutPlacesCount > 0)
            toastId = hdsToast({
              autoDismiss: false,
              type: 'error',
              toastId: 'multiApplicationsError',
              labelText: 'applicationList.errors.unhandledApplications.label',
              text: 'applicationList.errors.unhandledApplications.description',
              translated: true,
            });
          else toast.dismiss(toastId);

          return (
            <>
              <ApplicationListTools
                offersCount={offers.length}
                offersWithoutPlacesCount={offersWithoutPlacesCount}
                selectedApplicationsCount={selectedRows.length}
                isSubmitting={isSubmittingApproveOrders}
                clearSelectedRows={resetSelectedRows}
                handleApproveOrders={() => handleApproveOrders(offers)}
              />
              <ApplicationStateTableTools
                count={count}
                statusFilter={statusFilter}
                onStatusFilterChange={onStatusFilterChange}
              />
            </>
          );
        }}
        renderTableToolsBottom={() => (
          <Pagination
            forcePage={pageIndex}
            pageCount={getPageCount(data?.berthApplications?.count)}
            onPageChange={({ selected }) => goToPage(selected)}
          />
        )}
        renderEmptyStateRow={() => t('common.notification.noData.description')}
        initialState={{ sortBy }}
        onSortedColsChange={onSortedColsChange}
        manualSortBy
        canSelectRows
      />
    </PageContent>
  );
};

export default ApplicationList;

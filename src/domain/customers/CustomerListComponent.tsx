import React from 'react';
import { useTranslation } from 'react-i18next';
import { Column } from 'react-table';

import Table from '../../common/table/Table';
import InternalLink from '../../common/internalLink/InternalLink';
import CustomerDetails from './customerDetails/CustomerDetails';

export interface TableData {
  id: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  berths?: string;
  boats?: string;
  group?: string;
  invoice?: string;
  name: string;
  startDate?: string;
}

type ColumnType = Column<TableData> & { accessor: keyof TableData };
export interface CustomerListComponentProps {
  data: TableData[];
}

const CustomerListComponent = ({ data }: CustomerListComponentProps) => {
  const { t } = useTranslation();
  const columns: ColumnType[] = [
    {
      Cell: ({ cell }) => (
        <InternalLink to={`/customers/${cell.row.original.id}}`}>
          {cell.value}
        </InternalLink>
      ),
      Header: t('customers.tableHeaders.name') || '',
      accessor: 'name',
    },
    {
      Header: t('customers.tableHeaders.group') || '',
      accessor: 'group',
    },
    {
      Header: t('customers.tableHeaders.municipality') || '',
      accessor: 'city',
    },
    {
      Header: t('customers.tableHeaders.berths') || '',
      accessor: 'berths',
    },
    {
      Header: t('customers.tableHeaders.invoice') || '',
      accessor: 'invoice',
    },
    {
      Header: t('customers.tableHeaders.boats') || '',
      accessor: 'boats',
    },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      renderSubComponent={row => {
        return (
          <CustomerDetails
            name={row.original.name}
            address={row.original.address}
            postalCode={row.original.postalCode}
            city={row.original.city}
            phone={row.original.phone}
            email={row.original.email}
            group={row.original.group}
            berths={[]}
            winterStoragePlaces={[]}
            boats={[]}
            applications={[]}
            bills={[]}
            comment=""
          />
        );
      }}
      renderMainHeader={() => t('customers.tableHeaders.mainHeader')}
      canSelectRows
    />
  );
};

export default CustomerListComponent;

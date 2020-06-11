import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../section/Section';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import InternalLink from '../internalLink/InternalLink';
import { InvoicingType, OrganizationType } from '../../@types/__generated__/globalTypes';

export interface OrganizationCustomerDetailsProps {
  title?: string;
  comment?: string | null;
  customerId?: string;
  firstName: string;
  invoicingType?: InvoicingType;
  lastName: string;
  organization: {
    address: string;
    businessId: string;
    city: string;
    name: string;
    organizationType?: OrganizationType;
    postalCode: string;
  };
  primaryAddress?: {
    address: string;
    postalCode: string;
    city: string;
  } | null;
  primaryEmail?: string | null;
  primaryPhone?: string | null;
  showCustomerNameAsLink?: boolean;
  ssn?: string;
}

const OrganizationCustomerDetails = ({
  title,
  comment,
  customerId,
  firstName,
  invoicingType,
  lastName,
  organization,
  primaryEmail,
  primaryPhone,
  showCustomerNameAsLink = false,
  ssn,
}: OrganizationCustomerDetailsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Section title={title || t('customerProfile.organization').toUpperCase()}>
        <LabelValuePair label={t('customerProfile.name')} value={organization.name} />{' '}
        <LabelValuePair label={t('customerProfile.businessId')} value={organization.businessId} />
      </Section>
      <Section>
        <LabelValuePair label={t('customerProfile.address')} value={organization.address} />
        <LabelValuePair label={t('customerProfile.postalCode')} value={organization.postalCode} />
        <LabelValuePair label={t('customerProfile.city')} value={organization.city} />
      </Section>
      <Section>
        <LabelValuePair
          label={t('customerProfile.customerGroup')}
          value={t([`common.organizationTypes.${organization.organizationType || OrganizationType.COMPANY}`])}
        />
      </Section>
      <Section title={t('customerProfile.contactPerson').toUpperCase()}>
        <LabelValuePair
          label={t('customerProfile.firstName')}
          value={
            showCustomerNameAsLink && customerId ? (
              <InternalLink to={`/customers/${customerId}`}>{firstName}</InternalLink>
            ) : (
              firstName
            )
          }
        />
        <LabelValuePair
          label={t('customerProfile.lastName')}
          value={
            showCustomerNameAsLink && customerId ? (
              <InternalLink to={`/customers/${customerId}`}>{lastName}</InternalLink>
            ) : (
              lastName
            )
          }
        />
        {ssn && (
          <LabelValuePair
            label={t('customerProfile.ssn')}
            value={
              showCustomerNameAsLink && customerId ? (
                <InternalLink to={`/customers/${customerId}`}>{ssn}</InternalLink>
              ) : (
                ssn
              )
            }
          />
        )}
      </Section>
      <Section>
        <LabelValuePair label={t('customerProfile.phone')} value={primaryPhone} />
        <LabelValuePair label={t('customerProfile.email')} value={primaryEmail} />
      </Section>
      {invoicingType && (
        <Section>
          <LabelValuePair value={t([`common.invoicingTypes.${invoicingType}`])} />
        </Section>
      )}
      <Section>
        <LabelValuePair label={t('customerProfile.remarks')} value={comment} />
      </Section>
    </>
  );
};

export default OrganizationCustomerDetails;

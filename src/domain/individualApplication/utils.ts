import { ApplicationDetailsProps } from '../cards/applicationDetails/ApplicationDetails';
import { INDIVIDUAL_APPLICATION_berthApplication as BERTH_APPLICATION } from './__generated__/INDIVIDUAL_APPLICATION';
import { CustomerInfoCardProps } from '../cards/customerInfoCard/CustomerInfoCard';
import { FILTERED_CUSTOMERS } from './__generated__/FILTERED_CUSTOMERS';
import { CustomerData, CUSTOMER_GROUP } from './IndividualApplicationPage';

export const getCustomerInfoData = (
  berthApplication: BERTH_APPLICATION
): CustomerInfoCardProps => {
  const {
    firstName,
    lastName,
    address,
    zipCode,
    municipality,
    phoneNumber,
    email,
    customer,
  } = berthApplication;

  return {
    customerId: customer?.id,
    firstName,
    lastName,
    primaryAddress: { address, postalCode: zipCode, city: municipality },
    phone: phoneNumber,
    email,
  };
};

const getApplicationType = (isSwitch: boolean) =>
  isSwitch
    ? 'applications.applicationType.switchApplication'
    : 'applications.applicationType.newApplication';

export const getApplicationDetailsData = (
  berthApplication: BERTH_APPLICATION
): ApplicationDetailsProps => {
  const applicationType = getApplicationType(!!berthApplication?.berthSwitch);
  const harborChoices = berthApplication.harborChoices || [];
  const lease = berthApplication.lease
    ? {
        harborId:
          berthApplication.lease.berth?.pier.properties?.harbor.id || '',
        harborName:
          berthApplication.lease.berth?.pier.properties?.harbor.properties
            ?.name || '',
        id: berthApplication.lease.id,
      }
    : null;

  return {
    ...berthApplication,
    applicationType,
    queue: null,
    harborChoices,
    lease,
  };
};

export const getFilteredCustomersData = (
  data?: FILTERED_CUSTOMERS
): CustomerData[] | null => {
  if (!data?.profiles) return null;

  return data.profiles.edges.reduce<CustomerData[]>((acc, edge) => {
    if (!edge?.node) return acc;
    const {
      id,
      firstName,
      lastName,
      primaryAddress,
      company,
      berthLeases,
    } = edge.node;

    const berth = berthLeases?.edges.find(
      edge => edge?.node?.berth?.pier.properties?.harbor.properties?.name
    )?.node?.berth?.pier.properties?.harbor.properties?.name; // Note: leases will be ordered by created_at date when https://helsinkisolutionoffice.atlassian.net/browse/VEN-514 is resolved

    return [
      ...acc,
      {
        id,
        name: `${lastName}, ${firstName}`,
        city: primaryAddress?.city,
        address: primaryAddress?.address,
        customerGroup: company
          ? CUSTOMER_GROUP.COMPANY
          : CUSTOMER_GROUP.PRIVATE,
        berth,
      },
    ];
  }, []);
};

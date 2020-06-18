import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './pricingPage.module.scss';
import PageTitle from '../../common/pageTitle/PageTitle';
import BerthPricing, { BerthPricingProps } from './berthPricing/BerthPricing';
import WinterStoragePricing, { WinterStoragePricingProps } from './winterStoragePricing/WinterStoragePricing';
import HarborServicePricing, { HarborServicePricingProps } from './harborServicePricing/HarborServicePricing';
import AdditionalServicePricing, {
  AdditionalServicePricingProps,
} from './additionalServicePricing/AdditionalServicePricing';

export interface PricingPageProps {
  berthsData: BerthPricingProps['data'];
  berthsLoading: boolean;
  winterStorageData: WinterStoragePricingProps['data'];
  winterStorageLoading: boolean;
  harborServicesData: HarborServicePricingProps['data'];
  harborServicesLoading: boolean;
  additionalServicesData: AdditionalServicePricingProps['data'];
  additionalServicesLoading: boolean;
}

const PricingPage = ({
  berthsData,
  berthsLoading,
  winterStorageData,
  winterStorageLoading,
  harborServicesData,
  harborServicesLoading,
  additionalServicesData,
  additionalServicesLoading,
}: PricingPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.pricingPage}>
      <PageTitle title={t('pricing.title')} />
      <div className={styles.grid}>
        <BerthPricing className={styles.fullWidth} data={berthsData} loading={berthsLoading} />
        <WinterStoragePricing className={styles.fullWidth} data={winterStorageData} loading={winterStorageLoading} />
        <HarborServicePricing data={harborServicesData} loading={harborServicesLoading} />
        <AdditionalServicePricing data={additionalServicesData} loading={additionalServicesLoading} />
      </div>
    </div>
  );
};

export default PricingPage;

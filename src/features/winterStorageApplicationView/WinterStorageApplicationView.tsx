import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './winterStorageApplicationView.module.scss';
import Card from '../../common/card/Card';
import CardBody from '../../common/cardBody/CardBody';
import ApplicationDetails, { ApplicationDetailsProps } from '../../common/applicationDetails/ApplicationDetails';
import CardHeader from '../../common/cardHeader/CardHeader';
import Text from '../../common/text/Text';
import { formatDate } from '../../common/utils/format';
import StatusLabel from '../../common/statusLabel/StatusLabel';
import { APPLICATION_STATUS } from '../../common/utils/constants';
import CustomerProfileCard, { CustomerProfileCardProps } from '../../common/customerProfileCard/CustomerProfileCard';
import PageTitle from '../../common/pageTitle/PageTitle';
import PageContent from '../../common/pageContent/PageContent';
import ActionHistoryCard from '../../common/actionHistoryCard/ActionHistoryCard';
import LinkApplicationToCustomerContainer, {
  LinkApplicationToCustomerContainerProps,
} from '../linkApplicationToCustomer/LinkApplicationToCustomerContainer';

export interface ApplicationViewProps {
  customerProfile: CustomerProfileCardProps | null;
  applicationDetails: ApplicationDetailsProps;
  winterStorageApplication: LinkApplicationToCustomerContainerProps['application'];
  handleLinkCustomer(customerId: string): void;
  handleEditCustomer(): void;
  handleDeleteLease(id: string): void;
}

const WinterStorageApplicationView = ({
  customerProfile,
  applicationDetails,
  winterStorageApplication,
  handleDeleteLease,
  handleEditCustomer,
  handleLinkCustomer,
}: ApplicationViewProps) => {
  const { t, i18n } = useTranslation();

  return (
    <PageContent className={styles.applicationView}>
      <PageTitle title={t('applicationView.winterStorageTitle')} />
      <div className={classNames(styles.fullWidth, styles.pageHeader)}>
        <Text as="h2" size="xl" weight="normalWeight">
          {t('applicationList.applicationType.newApplication')}{' '}
          {formatDate(applicationDetails.createdAt, i18n.language)}
        </Text>
        <StatusLabel
          className={styles.statusLabel}
          type={APPLICATION_STATUS[applicationDetails.status].type}
          label={t(APPLICATION_STATUS[applicationDetails.status].label)}
        />
      </div>

      {customerProfile ? (
        <>
          <CustomerProfileCard {...customerProfile} handleEditCustomer={handleEditCustomer} />
          <ActionHistoryCard />
        </>
      ) : (
        <LinkApplicationToCustomerContainer
          application={winterStorageApplication}
          handleLinkCustomer={handleLinkCustomer}
        />
      )}

      <Card className={styles.fullWidth}>
        <CardHeader title={t('applicationView.applicationDetails.title')} />
        <CardBody>
          <ApplicationDetails {...applicationDetails} handleDeleteLease={handleDeleteLease} />
        </CardBody>
      </Card>

      {/*  TODO: Offer and invoicing */}
    </PageContent>
  );
};

export default WinterStorageApplicationView;

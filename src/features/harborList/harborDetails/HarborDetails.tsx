import React from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '../../../common/grid/Grid';
import ExternalLink from '../../../common/externalLink/ExternalLink';
import styles from './harborDetails.module.scss';
import Section from '../../../common/section/Section';
import Text from '../../../common/text/Text';
import { formatDimension } from '../../../common/utils/format';
import { HarborData } from '../types';
import MapLinks from '../../../common/mapLinks/MapLinks';
import placeholderImage from '../../../common/placeholderImage.svg';

export type HarborDetailsProps = Pick<
  HarborData,
  'imageFile' | 'maps' | 'maxWidth' | 'municipality' | 'servicemapId' | 'streetAddress' | 'zipCode'
>;

const HarborDetails = ({
  maps,
  imageFile,
  streetAddress,
  zipCode,
  municipality,
  servicemapId,
  maxWidth,
}: HarborDetailsProps) => {
  const { t, i18n } = useTranslation();
  const address = `${streetAddress}, ${zipCode} ${municipality}`;
  const imageSrc = imageFile ? imageFile : placeholderImage;
  const serviceMapUrl = `${process.env.REACT_APP_SERVICE_MAP_URI}${servicemapId}`;

  return (
    <Grid colsCount={4}>
      <div className={styles.column}>
        <img className={styles.image} src={imageSrc} alt="map" />
      </div>
      <div className={styles.column}>
        <Section className={styles.address} title={t('common.terminology.address').toUpperCase()}>
          {address}
        </Section>
        <Section>
          <ExternalLink href={serviceMapUrl} variant="withArrow">
            {t('common.terminology.serviceMap')}
          </ExternalLink>
        </Section>
        <MapLinks maps={maps} />
      </div>
      <div className={styles.column}>
        <Section title={t('common.terminology.maxWidth').toUpperCase()}>
          <Text>{formatDimension(maxWidth, i18n.language)}</Text>
        </Section>
        <Section title={t('common.terminology.mooring').toUpperCase()}>-</Section>
      </div>
      <div className={styles.column}>
        <Section title={t('common.terminology.maintenance').toUpperCase()}>-</Section>
        <Section title={t('common.terminology.harborChief').toUpperCase()}>-</Section>
      </div>
    </Grid>
  );
};

export default HarborDetails;

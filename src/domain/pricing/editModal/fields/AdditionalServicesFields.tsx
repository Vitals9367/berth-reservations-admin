import React, { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { TextInput } from 'hds-react/lib';
import { Field, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import styles from '../editModal.module.scss';
import Grid from '../../../../common/grid/Grid';
import Select from '../../../../common/select/Select';
import { formatPercentage } from '../../../../common/utils/format';
import FormTypeTitle from '../FormTypeTitle';
import { AdditionalService } from '../../PricingPage';

const serviceOptions = ['trawlerSummerStorage', 'parkingPermit', 'dinghyPlace'];
const taxOptions = [24];
const periodOptions = ['season', 'month', 'year'];

export const getAdditionalServicesValidationSchema = (t: TFunction) =>
  Yup.object().shape({
    service: Yup.string()
      .oneOf(serviceOptions)
      .required(t('forms.common.errors.required')),
    price: Yup.number()
      .positive()
      .typeError(t('forms.common.errors.numberType'))
      .required(t('forms.common.errors.required')),
    tax: Yup.number()
      .oneOf(taxOptions)
      .typeError(t('forms.common.errors.numberType'))
      .required(t('forms.common.errors.required')),
    period: Yup.string()
      .oneOf(periodOptions)
      .required(t('forms.common.errors.required')),
  });

const AdditionalServicesFields: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const { errors } = useFormikContext<AdditionalService>();

  return (
    <>
      <FormTypeTitle
        label={t('common.terminology.dataEntry')}
        value={t('pricing.additionalServices.title')}
      />
      <hr />
      <Grid colsCount={1} className={styles.row}>
        <Field
          required={true}
          as={Select}
          name="service"
          labelText={t('pricing.additionalServices.service')}
          options={serviceOptions.map(option => ({
            value: option,
            label: t([`common.terminology.${option}`]),
          }))}
        />
      </Grid>
      <Grid colsCount={2} className={styles.row}>
        <Field
          required={true}
          as={TextInput}
          id="price"
          name="price"
          labelText={`${t('pricing.additionalServices.price')} (€)`}
          invalid={!!errors.price}
          invalidText={errors.price}
        />
        <Field
          required={true}
          as={Select}
          name="tax"
          labelText={t('pricing.additionalServices.tax')}
          options={taxOptions.map(option => ({
            value: option,
            label: formatPercentage(option * 0.01, i18n.language),
          }))}
        />
      </Grid>
      <Grid colsCount={2} className={styles.row}>
        <Field
          required={true}
          as={Select}
          name="period"
          labelText={t('pricing.additionalServices.period')}
          options={periodOptions.map(option => ({
            value: option,
            label: t([`common.periodTypes.${option}`]),
          }))}
        />
      </Grid>
    </>
  );
};

export default AdditionalServicesFields;

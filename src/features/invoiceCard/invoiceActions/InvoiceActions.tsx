import React from 'react';
import { useTranslation } from 'react-i18next';

import Select from '../../../common/select/Select';
import styles from './invoiceActions.module.scss';

interface Action {
  label: string;
  value: number;
  disabled: boolean;
  onClick(): void;
}

export interface InvoiceActionsProps {
  actions: Array<Action>;
  selectedAction: Action['value'] | null;
  disabled?: boolean;
}

const InvoiceActions = ({ actions, disabled, selectedAction }: InvoiceActionsProps) => {
  const { t } = useTranslation();

  const activeActions = actions.filter((action) => !action.disabled);

  return (
    <Select
      placeholder={t('invoiceCard.edit')}
      className={styles.invoiceActions}
      disabled={disabled}
      options={activeActions}
      value={selectedAction}
      onChange={(args) => actions.find((action) => action.value === args.target.value)?.onClick()}
    />
  );
};

export default InvoiceActions;

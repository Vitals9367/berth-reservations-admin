import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { RECURRING_INVOICES_QUERY } from './queries';
import { RECURRING_INVOICES } from './__generated__/RECURRING_INVOICES';
import { SEND_EXISTING_BERTH_INVOICES_MUTATION } from './mutations';
import {
  SEND_EXISTING_BERTH_INVOICES,
  SEND_EXISTING_BERTH_INVOICESVariables as SEND_EXISTING_BERTH_INVOICES_VARS,
} from './__generated__/SEND_EXISTING_BERTH_INVOICES';
import hdsToast from '../../common/toast/hdsToast';
import RecurringInvoices from './RecurringInvoices';
import Modal from '../../common/modal/Modal';
import RecurringInvoicesForm from './recurringInvoicesForm/RecurringInvoicesForm';
import { getProfileToken } from '../../common/utils/auth';
import { getFailedBerthInvoicesData, getSummaryData } from './utils';

const RecurringWinterStorageInvoicesContainer = () => {
  const [sendInvoiceModalOpen, setSendInvoiceModalOpen] = useState(false);

  const { loading, data } = useQuery<RECURRING_INVOICES>(RECURRING_INVOICES_QUERY, {
    variables: {
      seasonYear: new Date().getFullYear(),
    },
  });
  const [sendExistingBerthInvoices, { loading: isSubmitting }] = useMutation<
    SEND_EXISTING_BERTH_INVOICES,
    SEND_EXISTING_BERTH_INVOICES_VARS
  >(SEND_EXISTING_BERTH_INVOICES_MUTATION);

  const handleSubmit = async (values: { dueDate: string }) => {
    await sendExistingBerthInvoices({
      variables: {
        input: {
          dueDate: values.dueDate,
          profileToken: getProfileToken(),
        },
      },
    }).then((res) => {
      if (!res.errors) {
        hdsToast({
          type: 'success',
          labelText: 'toast.invoiceSent.label',
          text: 'toast.invoiceSent.description',
          translated: true,
        });
      }
    });
    setSendInvoiceModalOpen(false);
  };

  return (
    <>
      <RecurringInvoices
        dataSummary={getSummaryData(data, loading)}
        failedInvoicesData={getFailedBerthInvoicesData(data)}
        handleSend={() => setSendInvoiceModalOpen(true)}
        loading={loading}
        placeAccessor="harbor"
        placeLabelKey={'common.terminology.winterStorageArea'}
        sendButtonLabelKey={'recurringInvoices.sendWinterStorageInvoices'}
        titleKey={'recurringInvoices.winterStorageInvoicesTitle'}
      />
      <Modal isOpen={sendInvoiceModalOpen} toggleModal={() => setSendInvoiceModalOpen(false)}>
        <RecurringInvoicesForm
          descriptionKey={'recurringInvoices.form.descriptionWinterStorage'}
          onSubmit={handleSubmit}
          onCancel={() => setSendInvoiceModalOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </>
  );
};

export default RecurringWinterStorageInvoicesContainer;

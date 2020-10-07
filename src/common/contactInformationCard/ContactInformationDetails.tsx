import React from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../section/Section';
import ExternalLink from '../externalLink/ExternalLink';
import LabelValuePair from '../labelValuePair/LabelValuePair';

export interface ContactInformationDetailsProps {
  className?: string;
}

// TODO
const ContactInformationDetails = ({ className }: ContactInformationDetailsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Section title={t('common.terminology.maintenanceTeam').toUpperCase() + ' (PLACEHOLDER)'} className={className}>
        <p>Itäinen veneilytiimi</p>
        <p>(Kulosaaren sillasta itään)</p>
        <ExternalLink href="mailto:itainenveneilytiimi@hel.fi">itainenveneilytiimi@hel.fi</ExternalLink>
      </Section>

      <Section title={t('common.terminology.harborChief').toUpperCase() + ' (PLACEHOLDER)'} className={className}>
        <LabelValuePair label={'Nimi'} value={'Mikko Mallikas'} />
        <LabelValuePair label={'Puhelin'} value={'+358 00 000 0000'} />
        <LabelValuePair
          label={'Sähköposti'}
          value={<ExternalLink href="mailto:etunimi.sukunimi@gmail.com">etunimi.sukunimi@gmail.com</ExternalLink>}
        />
      </Section>
    </>
  );
};

export default ContactInformationDetails;

import React, { FC } from 'react';

import H1Style from 'src/Components/Common/H1/H1Style';
import SectionStyle from './SectionEventStyle';

const H1 = H1Style();
const Section = SectionStyle();

export interface ISectionEvent {
  title: string;
}

const SectionEvent: FC<ISectionEvent> = ({ children, title }) => {
  return (
    <Section>
      <H1>{title}</H1>
      {children}
    </Section>
  );
};

export default SectionEvent;

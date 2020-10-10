import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset } from 'src/store/eventCreate/configFieldset';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowTypes from 'src/Components/Common/RowTypes/RowTypes';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

export interface IField {
  formid: string;
  configFieldset: IConfigFieldset;
  acEdit: TacEdit;
  eventCreate: IInitial;
}

const FieldAbout: FC<IField> = ({ formid, configFieldset, acEdit, eventCreate }) => {
  return (
    <Fieldset>
      <Legend>{text('About')}</Legend>
      <RowTypes {...{ formid, configFieldset, acEdit, eventCreate }} />
    </Fieldset>
  );
};

export default FieldAbout;

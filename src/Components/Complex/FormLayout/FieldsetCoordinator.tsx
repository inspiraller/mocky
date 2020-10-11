import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset } from 'src/types';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowTypes from 'src/Components/Common/RowTypes/RowTypes';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const configFieldset: IConfigFieldset = {
  title: {
    required: true
  }
};

export interface IField {
  formid: string;
  acEdit: TacEdit;
  eventCreate: IInitial;
}

const FieldsetCoordinator: FC<IField> = ({ formid, acEdit, eventCreate }) => {
  return (
    <Fieldset>
      <Legend>{text('Coordinator')}</Legend>
      <RowTypes {...{ formid, configFieldset, acEdit, eventCreate }} />
    </Fieldset>
  );
};

export default FieldsetCoordinator;

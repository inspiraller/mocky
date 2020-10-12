import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset } from 'src/types';
import { IInitial } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInputTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const configFieldset: IConfigFieldset = {
  title: {
    required: true
  },
  description: {
    type: 'textarea',
    required: true,
    maxLength: 140
  },
  category_id: {
    label: 'category',
    type: 'select',
    options: [
      { name: text('rock'), value: 0 },
      { name: text('indie'), value: 1 },
      { name: text('accoustic'), value: 2 }
    ],
    valueType: 'number'
  },
  paid_event: {
    label: 'payment',
    type: 'radio',
    radios: [
      { name: text('Free event'), value: false },
      { name: text('Paid event'), value: true }
    ],
    valueType: 'boolean',
    ariaExpands: 'event_fee',
    adjacent: {
      event_fee: {
        label: 'fee',
        type: 'money',
        ariaExpandedBy: {
          id: 'paid_event',
          condition: true
        },
        isLabel: false,
        required: true,
        valueType: 'number',
        inline: true
      }
    }
  },
  reward: {
    type: 'number',
    adjacent: text('reward points for attendance'),
    valueType: 'number'
  }
};

export interface IField {
  formid: string;
  acEdit: TacEdit;
  eventCreate: IInitial;
}

const FieldsetAbout: FC<IField> = ({ formid, acEdit, eventCreate }) => {
  return (
    <Fieldset>
      <Legend>{text('About')}</Legend>
      <RowInputTypes {...{ formid, configFieldset, acEdit, eventCreate }} />
    </Fieldset>
  );
};

export default FieldsetAbout;

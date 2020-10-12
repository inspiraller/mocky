import React, { FC, useEffect } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset, IConfigFieldsetItemProps } from 'src/types';

import { IInitial as IInitialEventCreate } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import { IInitial as IInitialPreload } from 'src/store/preload/_initialState';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInputTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const configFieldset: IConfigFieldset = {
  responsible: {
    label: 'category',
    type: 'select',
    options: undefined,
    valueType: 'string'
  }
};

export interface IField {
  formid: string;
  acEdit: TacEdit;
  eventCreate: IInitialEventCreate;
  preload: IInitialPreload;
}

const FieldsetCoordinator: FC<IField> = ({ formid, acEdit, eventCreate, preload }) => {
  useEffect(() => {
    const { responsible } = preload;
    if (responsible && !configFieldset.options) {
      const options: IConfigFieldsetItemProps['options'] = responsible.map(item => ({
        name: `${item.name} ${item.lastname}`,
        value: item.id
      }));
      configFieldset.responsible.options = options;
    }
  });

  return (
    <Fieldset>
      <Legend>{text('Coordinator')}</Legend>
      <RowInputTypes {...{ formid, configFieldset, acEdit, eventCreate }} />
    </Fieldset>
  );
};

export default FieldsetCoordinator;

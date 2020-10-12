import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'src/store/storeTypes';
import text from 'src/Main/text';

import { IConfigFieldset, IConfigFieldsetInputProps, Toptgroups, Toptions } from 'src/types';

import { IInitial as IInitialEventCreate } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import { IInitial as IInitialPreload, TResponsibleProps } from 'src/store/preload/_initialState';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInputTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

const configFieldsetTemplate: IConfigFieldset = {
  responsible: {
    label: 'responsible',
    type: 'select',
    options: undefined,
    valueType: 'string'
  },
  email: {}
};

export interface IField {
  formid: string;
  acEdit: TacEdit;
  eventCreate: IInitialEventCreate;
  preload: IInitialPreload;
}

type TcreateOptGroups = (responsible?: TResponsibleProps) => IConfigFieldset;

const createOptGroups: TcreateOptGroups = responsible => {
  let augment = configFieldsetTemplate;
  if (responsible && !configFieldsetTemplate.options) {
    const options: IConfigFieldsetInputProps['options'] = responsible.map(item => ({
      name: `${item.name} ${item.lastname}`,
      value: item.id
    }));

    const me: Toptions = [options.find(item => item.name === 'Ashley Hernandez')] as Toptions;
    const others: Toptions = options.filter(item => item.name !== 'Ashley Hernandez');

    const optgroups = { me, others };
    augment = {
      ...configFieldsetTemplate,
      ...{ responsible: { ...configFieldsetTemplate.responsible, optgroups } }
    };
  }
  return augment;
};

const FieldsetCoordinator: FC<IField> = ({ formid, acEdit, eventCreate, preload }) => {
  let configFieldsetAugmentResponsible;
  const [configFieldset, setConfigFieldset] = useState(configFieldsetTemplate);
  useEffect(() => {
    if (preload.responsible && !configFieldset.responsible.optgroups) {
      const { responsible } = preload;
      configFieldsetAugmentResponsible = createOptGroups(responsible);
      setConfigFieldset(configFieldsetAugmentResponsible);
    }
  });

  return (
    <Fieldset>
      <Legend>{text('Coordinator')}</Legend>
      <RowInputTypes {...{ formid, configFieldset, acEdit, eventCreate }} />
    </Fieldset>
  );
};

export default connect((state: RootState) => ({
  preload: state.preload
}))(FieldsetCoordinator);

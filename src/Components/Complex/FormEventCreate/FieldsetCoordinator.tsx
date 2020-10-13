import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'src/store/storeTypes';
import text from 'src/Main/text';

import {
  IConfigFieldset,
  IConfigFieldsetInputProps,
  Toptgroups,
  Toptions,
  TAnyHook
} from 'src/types';
import editConfigFieldset from 'src/util/editConfigFieldset';

import { IInitial as IInitialEventCreate } from 'src/store/eventCreate/_initialState';
import { TacEdit } from 'src/store/eventCreate/actions';

import { IInitial as IInitialPreload, TResponsibleProps } from 'src/store/preload/_initialState';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';

import RowInputTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

export const configFieldset: IConfigFieldset = {
  coordinator_id: {
    label: 'responsible',
    type: 'select',
    options: undefined,
    valueType: 'string',
    required: true
  },
  coordinator_email: {
    label: 'email'
  }
};

export interface IField {
  formid: string;
  acEdit: TacEdit;
  eventCreate: IInitialEventCreate;
  preload: IInitialPreload;
  submitTouched: boolean;
}

type TgetResponsibleAsOptions = (responsible?: TResponsibleProps) => Toptions | undefined;

const getResponsibleAsOptions: TgetResponsibleAsOptions = responsible => {
  if (responsible && !configFieldset.options) {
    const options: IConfigFieldsetInputProps['options'] = responsible.map(item => ({
      name: `${item.name} ${item.lastname}`,
      value: item.id
    }));
    return options;
  }
  return undefined;
};

type TgetResponsibleOptGroups = (options?: Toptions) => Toptgroups | undefined;

const getResponsibleOptGroups: TgetResponsibleOptGroups = options => {
  if (options) {
    const me: Toptions = [options.find(item => item.name === 'Ashley Hernandez')] as Toptions;
    const others: Toptions = options.filter(item => item.name !== 'Ashley Hernandez');
    return { me, others };
  }
  return undefined;
};

type TupdateConfigWithResponsible = (props: {
  preload: IInitialPreload;
  augmentConfig: IConfigFieldset;
  setAugmentConfig: TAnyHook;
}) => void;

const updateConfigWithResponsible: TupdateConfigWithResponsible = ({
  preload,
  augmentConfig,
  setAugmentConfig
}) => {
  if (preload.responsible && !augmentConfig.coordinator_id.optgroups) {
    const { responsible } = preload;
    const options = getResponsibleAsOptions(responsible);
    const optgroups = getResponsibleOptGroups(options);
    if (optgroups) {
      const configFieldsetCoordinatorID = editConfigFieldset({
        configFieldset,
        key: 'coordinator_id',
        childkey: 'optgroups',
        val: optgroups
      });
      setAugmentConfig(configFieldsetCoordinatorID);
    }
  }
};

const FieldsetCoordinator: FC<IField> = props => {
  const [augmentConfig, setAugmentConfig] = useState(configFieldset);
  const { preload } = props;
  useEffect(() => {
    updateConfigWithResponsible({ preload, augmentConfig, setAugmentConfig });
  });

  return (
    <Fieldset>
      <Legend>{text('Coordinator')}</Legend>
      <RowInputTypes {...{ ...props, configFieldset: augmentConfig }} />
    </Fieldset>
  );
};

export default connect((state: RootState) => ({
  preload: state.preload
}))(FieldsetCoordinator);

import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'src/store/storeTypes';

import { IConfigFieldset } from 'src/types';
import { IInitial as IInitialEventCreate } from 'src/store/eventCreate/_initialState';
import { IInitial as IInitialPreload } from 'src/store/preload/_initialState';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';
import RowInputTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';

import text from 'src/Main/text';
import { TacEdit } from 'src/store/eventCreate/actions';
import { updateCoordIdWithResponsible } from './util/convertResponsible';

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

const FieldsetCoordinator: FC<IField> = props => {
  const [config, setConfig] = useState(configFieldset);
  const { preload } = props;
  useEffect(() => {
    const configUpdated: IConfigFieldset | null = updateCoordIdWithResponsible({
      preload,
      config
    });
    if (configUpdated) {
      setConfig(configUpdated);
    }
  });

  return (
    <Fieldset>
      <Legend>{text('Coordinator')}</Legend>
      <RowInputTypes {...{ ...props, configFieldset: config }} />
    </Fieldset>
  );
};

export default connect((state: RootState) => ({
  preload: state.preload
}))(FieldsetCoordinator);

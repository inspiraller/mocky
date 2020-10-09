import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, TThunkDispatch } from 'src/store/storeTypes';
import { IInitial } from 'src/store/eventCreate/_initialState';

import configForm from 'src/store/eventCreate/configForm';
import { actions, TacEdit } from 'src/store/eventCreate/actions';

import FormLayout from 'src/Components/Complex/FormLayout';

const { acEdit } = actions;

const RouteForm: FC<{ eventCreate: IInitial; acEdit: TacEdit }> = ({ eventCreate }) => (
  <FormLayout {...{ title: 'New Event .............', configForm, eventCreate, acEdit }} />
);

const mapDispatchToProps = (dispatch: TThunkDispatch) => bindActionCreators({ acEdit }, dispatch);

export default connect(
  (state: RootState) => ({
    eventCreate: state.eventCreate
  }),
  mapDispatchToProps
)(RouteForm);

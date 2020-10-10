import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, TThunkDispatch } from 'src/store/storeTypes';
import { IInitial } from 'src/store/eventCreate/_initialState';

import configFieldset from 'src/store/eventCreate/configFieldset';
import { actions, TacEdit } from 'src/store/eventCreate/actions';

import FormLayout from 'src/Components/Complex/FormLayout';

const RouteForm: FC<{ eventCreate: IInitial; acEdit: TacEdit }> = ({ eventCreate, acEdit }) => (
  <FormLayout {...{ title: 'New Event', configFieldset, eventCreate, acEdit }} />
);

const mapDispatchToProps = (dispatch: TThunkDispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  (state: RootState) => ({
    eventCreate: state.eventCreate
  }),
  mapDispatchToProps
)(RouteForm);

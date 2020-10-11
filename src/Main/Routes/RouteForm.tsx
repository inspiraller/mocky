import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, TThunkDispatch } from 'src/store/storeTypes';

import { IInitial as IInitialCreateEvent } from 'src/store/eventCreate/_initialState';
import { actions as actionsCreateEvent, TacEdit } from 'src/store/eventCreate/actions';

import { IInitial as IInitialPreload } from 'src/store/preload/_initialState';
import { actions as actionsPreload, TacPopulateCoordinator } from 'src/store/preload/actions';

import FormLayout from 'src/Components/Complex/FormLayout';

interface IRouteForm {
  eventCreate: IInitialCreateEvent;
  acEdit: TacEdit;
  preload: IInitialPreload;
  acPopulateCoordinator: TacPopulateCoordinator;
}

const RouteForm: FC<IRouteForm> = props => <FormLayout {...{ ...props, title: 'New Event' }} />;

const mapDispatchToProps = (dispatch: TThunkDispatch) =>
  bindActionCreators({ ...actionsCreateEvent, ...actionsPreload }, dispatch);

export default connect(
  (state: RootState) => ({
    eventCreate: state.eventCreate,
    preload: state.preload
  }),
  mapDispatchToProps
)(RouteForm);

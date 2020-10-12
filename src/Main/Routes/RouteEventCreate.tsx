import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, TThunkDispatch } from 'src/store/storeTypes';

import { IInitial as IInitialCreateEvent } from 'src/store/eventCreate/_initialState';
import { actions as actionsCreateEvent, TacEdit } from 'src/store/eventCreate/actions';

import FormEventCreate from 'src/Components/Complex/FormEventCreate/FormEventCreate';

const RouteEventCreate: FC = props => <FormEventCreate {...{ ...props, title: 'New Event' }} />;

export default RouteEventCreate;

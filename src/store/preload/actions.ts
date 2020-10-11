import { createAction } from 'redux-actions';
import { Action } from 'redux';
import { TCoordinatorProps, TResponsibleProps } from './_initialState';

import at from './actionTypes';

export type TacPopulateCoordinator = (props: { coordinator: TCoordinatorProps }) => Action;
const acPopulateCoordinator: TacPopulateCoordinator = createAction(at.POPULATE_COORDINATOR);

export type TacPopulateResponsible = (props: { responsible: TResponsibleProps }) => Action;
const acPopulateResponsible: TacPopulateResponsible = createAction(at.POPULATE_RESPONSIBLE);

const actions = {
  acPopulateCoordinator,
  acPopulateResponsible
};

export { actions };

export default actions;

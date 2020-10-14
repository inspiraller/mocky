import { createAction } from 'redux-actions';
import { Action } from 'redux';
import { TResponsibleProps } from './_initialState';

import at from './actionTypes';

export type TacPopulateResponsible = (props: { responsible: TResponsibleProps }) => Action;
const acPopulateResponsible: TacPopulateResponsible = createAction(at.POPULATE_RESPONSIBLE);

const actions = {
  acPopulateResponsible
};

export { actions };

export default actions;

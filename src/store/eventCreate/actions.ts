import { createAction } from 'redux-actions';
import { Action } from 'redux';
import { TLitVal } from './_initialState';

import at from './actionTypes';

export type TacEdit = (props: { [key: string]: TLitVal }) => Action;

const acEdit: TacEdit = createAction(at.EDIT);

const actions = {
  acEdit
};

/* example
store.dispatch(acEdit({
  title: 'steve'
})) === {
  type: '@createEvent/Edit',
  payload: {
    title: 'steve'
  }
}
*/

export { actions };

export default actions;

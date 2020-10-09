import { createAction } from 'redux-actions'; //  ActionFunctionAny
import { Action } from 'redux';
// import { ThunkAction } from 'redux-thunk';
// import { RootState } from 'src/store/storeTypes';

import at from './actionTypes';

// export type TacEdit = (payload: {
//   [key: string]: string;
// }) => ThunkAction<void, RootState, undefined, Action>;

export type TacEdit = (props: { [key: string]: string }) => Action;

const acEdit: TacEdit = createAction(at.EDIT);

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

const actions = {
  acEdit
};

export { actions };

export default actions;

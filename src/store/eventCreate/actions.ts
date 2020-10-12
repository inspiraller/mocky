import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { createAction } from 'redux-actions';
import { RootState } from 'src/store/storeTypes';
import convertValue from 'src/util/convertValue';

import { TLitVal } from './_initialState';
import at from './actionTypes';

export type TacEdit = (payload: {
  [key: string]: TLitVal;
}) => ThunkAction<void, RootState, undefined, Action>;

const acEdit: TacEdit = payload => (dispatch, getState) => {
  const store = getState();
  const { preload } = store;
  const { responsible } = payload;

  if (typeof responsible !== 'undefined' && preload.responsible) {
    const intResponsible: number = convertValue(String(responsible), 'number') as number;
    dispatch({
      type: at.POPULATE_EMAIL,
      payload: {
        email: preload.responsible[intResponsible].email
      }
    });
  }
  return dispatch({
    type: at.EDIT,
    payload
  });
};

// const acEdit: TacEdit = createAction(at.EDIT);

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

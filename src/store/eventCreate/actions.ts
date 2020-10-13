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
  const { coordinator_id } = payload;

  if (typeof coordinator_id !== 'undefined' && preload.responsible) {
    const intResponsible: number = convertValue(String(coordinator_id), 'number') as number;
    const item = intResponsible !== -1 ? preload.responsible[intResponsible] : null;
    const email = item ? item.email : '';
    dispatch({
      type: at.POPULATE_EMAIL,
      payload: {
        coordinator_email: email
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

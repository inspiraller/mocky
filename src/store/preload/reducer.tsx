import { handleActions } from 'redux-actions';
import at from './actionTypes';
import initialState from './_initialState';

const reducer = handleActions(
  {
    [at.POPULATE_COORDINATOR]: (state, { payload }) => ({
      ...state,
      ...payload
    }),
    [at.POPULATE_RESPONSIBLE]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
);

export default reducer;

import { handleActions } from 'redux-actions';
import at from './actionTypes';
import initialState from './_initialState';

const reducer = handleActions(
  {
    [at.EDIT]: (state, { payload }) => ({
      ...state,
      ...payload
    }),
    [at.POPULATE_EMAIL]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
);

export default reducer;

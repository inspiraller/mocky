import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { createBrowserHistory, createMemoryHistory } from 'history';
import configureStore from './configureStore';

const history = typeof document !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
export { history };
const { store } = configureStore({ history, initialState: {} });

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type TThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type TThunkDispatch = ThunkDispatch<RootState, undefined, Action>;

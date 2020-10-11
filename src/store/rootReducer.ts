import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import preload from './preload/reducer';
import eventCreate from './eventCreate/reducer';

import { RootState } from './storeTypes';

const rootReducer = {
  preload,
  eventCreate
};

const createRootReducer = (history: History): RootState =>
  combineReducers({
    router: connectRouter(history),
    ...rootReducer
  });

export default createRootReducer;
export { rootReducer };

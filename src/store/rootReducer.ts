import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import examples from './examples/examples';
import eventCreate from './eventCreate/reducer';

import { RootState } from './storeTypes';

const rootReducer = {
  examples,
  eventCreate
};

const createRootReducer = (history: History): RootState =>
  combineReducers({
    router: connectRouter(history),
    ...rootReducer
  });

export default createRootReducer;
export { rootReducer };

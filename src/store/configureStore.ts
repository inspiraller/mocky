import { createStore, applyMiddleware, compose, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { History } from 'history';
import { RootState } from './storeTypes';
import createRootReducer from './rootReducer';

type TConfigure = (arbitrary: { initialState: RootState; history: History }) => { store: Store };

const configureStore: TConfigure = ({ initialState, history }) => {
  const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const middlewares = [thunk, routerMiddleware(history)];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store: Store = createStore(createRootReducer(history), initialState, enhancer);
  return { store };
};

export default configureStore;

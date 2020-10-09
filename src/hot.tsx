import React from 'react';
import createRootReducer from 'src/store/rootReducer';
import store, { history } from 'src/store/storeTypes';
import { TDOM } from 'src/@types/index';
import { IRender, TRender } from './index';

interface IHotProps extends IRender {
  render: TRender;
  DOM: TDOM;
}

type THot = (props: IHotProps) => void;

const handleHotReload: THot = ({ DOM, Comp, render }) => {
  if (module && module.hot) {
    module.hot.accept('./Main/App', () => {
      return render({ DOM, Comp });
    });
    module.hot.accept('./store/rootReducer', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }
};

export default handleHotReload;

import 'cross-fetch/polyfill'; // patch for tests: Error: fetch is not found globally and no fetcher passed, to fix pass a fetch for your environment

import 'core-js';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';

import React, { Component, FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'src/Main/Styles/GlobalStyle';
import { themeLight } from 'src/Main/Styles/Theme';

import App from 'src/Main/App';
import store, { history } from 'src/store/storeTypes';

import { TDOM } from 'src/@types/index';
import handleHotReload from './hot';

export interface IRender {
  DOM: TDOM;
  Comp: typeof Component;
}

export type TRender = (props: IRender) => void;
export const WrapRoot: FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </Provider>
);

export const render: TRender = ({ DOM, Comp }) => {
  DOM.render(
    <AppContainer>
      <WrapRoot>
        <Comp history={history} />
      </WrapRoot>
    </AppContainer>,
    document.getElementById('root') || document.createElement('div')
  );
};

render({ DOM: ReactDOM, Comp: App });
handleHotReload({ DOM: ReactDOM, Comp: App, render });

export default {};

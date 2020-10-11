import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { AllRoutes, configRoutes } from 'src/Main/Routes';
import PreloadCoordinator from 'src/Components/Complex/Preload/PreloadCoordinator';
import PreloadResponsible from 'src/Components/Complex/Preload/PreloadResponsible';

type TProps = {
  history: History;
};

class App extends Component<TProps> {
  componentDidMount() {
    document.title = 'React-Mocky';
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <PreloadCoordinator />
        <PreloadResponsible />
        <AllRoutes {...{ routes: configRoutes }} />
      </ConnectedRouter>
    );
  }
}

export default App;

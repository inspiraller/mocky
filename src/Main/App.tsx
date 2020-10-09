import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { AllRoutes, configRoutes } from 'src/Main/Routes';

type TProps = {
  history: History;
};

class App extends Component<TProps> {
  componentDidMount() {
    document.title = 'Example';
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <AllRoutes {...{ routes: configRoutes }} />
      </ConnectedRouter>
    );
  }
}

export default App;

import { BrowserRouter, withRouter } from 'react-router-dom';
import { routes } from './components/routes';
import React, { Component } from 'react';

const AppWithRouter = withRouter(routes);

class App extends Component {
  render() {   
    return (
      <BrowserRouter>
        <AppWithRouter {...this.props} />
      </BrowserRouter>
    );
  }
}

export default App;

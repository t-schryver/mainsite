import { BrowserRouter, withRouter, NavLink } from 'react-router-dom';
import { routes } from './components/routes';
import React, { Component } from 'react';

const AppWithRouter = withRouter(routes);

class App extends Component {
  render() {   
    return (
      <div>
        <div>
        <BrowserRouter>
          <AppWithRouter {...this.props} />
        </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

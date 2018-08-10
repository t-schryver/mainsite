import { BrowserRouter, withRouter } from 'react-router-dom';
import { routes } from './routes';
import React, { Component } from 'react';


const AppWithRouter = withRouter(routes);

class App extends Component {

  render() {
    
    return (
      <div>
        <BrowserRouter>
          <AppWithRouter {...this.props} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

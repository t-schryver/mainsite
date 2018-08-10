import * as React from 'react';
import { Router, Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import history from './history'

import Home from '../src/components/Home'
import ContactUs from '../src/components/ContactUs'

export function routes() {
  return ( 
    <Router history={history}>
        <Switch>
            <Route exact={true} path="/home" render={(props) => <Home />} />
            {
                // This path must always be last
            }
            <Route exact={true} path="/contactus" render={(props) => <ContactUs />} />
            {
                // This path must always be last
            }
            <Route path="/*" render={(props) => <Redirect to="/home" />} />
        </Switch>
    </Router>
  );
}

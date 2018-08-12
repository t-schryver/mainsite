import * as React from 'react';
import { Router, Switch } from 'react-router';
import { Route, Redirect, NavLink } from 'react-router-dom';

import history from '../history'
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Footer from '../components/Footer';

export function routes() {
  return ( 
    <div>
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route exact={true} path="/home" component={Home} />
                    {
                        // This path must always be last
                    }
                    <Route exact={true} path="/contactus" component={ContactUs} />
                    {
                        // This path must always be last
                    }
                    <Route exact={true} path="/aboutus" component={AboutUs} />
                    {
                        // This path must always be last
                    }
                    <Route path="/*" render={(props) => <Redirect to="/home" />} />
                </Switch>
                <Footer />
            </div>
        </Router>
             
    </div>        
  );
}

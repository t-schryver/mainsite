import * as React from 'react';
import { Router, Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

import history from '../history'
import Header from '../components/Header';
import Home from '../components/Home';
import OurServices from '../components/OurServices';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export function routes() {
  return ( 
    <div>
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route exact={true} path="/mainsite" component={Home} />
                    <Route exact={true} path="/ourservices" component={OurServices} />
                    <Route exact={true} path="/aboutus" component={AboutUs} />
                    <Route exact={true} path="/contactus" component={ContactUs} />
                    
                    
                    {/* // This path must always be last */}
                    <Route path="/*" render={(props) => <Redirect to="/mainsite" />} />
                </Switch>
                <Footer />
            </div>
        </Router>
             
    </div>        
  );
}

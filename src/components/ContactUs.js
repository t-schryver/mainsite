import * as React from 'react';
import logo from '../images/logo_transparent.png';
import '../css/App.css';
import SimpleMap from './SimpleMap'
import { Navbar, NavbarBrand, NavbarBrandProps, NavItem, Nav,NavDropdown,MenuItem} from 'react-bootstrap';

export default class ContactUs extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div >
        <div>
          <p style={{textAlign:'center'}}>Contact Us</p>
        </div>
        <div>
          <SimpleMap />
        </div>
        <div className="App"> 
          <img src={logo} alt="logo" className="responsive"/>
        </div>
      </div>
    );
  }
}

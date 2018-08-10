import React, { Component } from 'react';
import logo from './images/logo_transparent.png';
import './css/App.css';
import SimpleMap from '../src/components/SimpleMap'
import { Navbar, NavbarBrand, NavbarBrandProps, NavItem, Nav,NavDropdown,MenuItem} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      <div >
        {/* <PageHeader className="App-header">
          This site is under construction
        </PageHeader> */}
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Techster Solutions</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>  
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                Our Services
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                About Us
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <p style={{textAlign:'center'}}>THIS PAGE IS UNDER CONSTRUCTION</p>
        </div>
        <div>
          <SimpleMap />
        </div>
        <div className="App"> 
          <img src={logo} alt="logo" className="responsive"/>
        </div>
        <Navbar inverse>
          <Nav>
            <NavItem >
              © {new Date().getFullYear()} Techster Solutions. All Rights Reserved
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;

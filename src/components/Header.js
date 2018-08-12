import * as React from 'react';
import '../css/App.css';
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Header extends React.Component{
  
  render() {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Techster Solutions</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>  
                <Navbar.Collapse>
                <Nav>
                    <LinkContainer to='/home'>
                        <NavItem eventKey={1}>
                            Home
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to='/ourservices'>
                        <NavItem eventKey={2}>
                            Our Services
                        </NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <LinkContainer to='/aboutus'>
                        <NavItem eventKey={1}>
                            About Us
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to='/contactus'>
                        <NavItem eventKey={2}>
                            Contact Us
                        </NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
  }
}

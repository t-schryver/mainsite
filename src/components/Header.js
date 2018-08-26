import * as React from 'react';
import '../css/App.css';
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, NavItem, Nav} from 'react-bootstrap';
// import styled from 'styled-components';



// Syntax required to use styled-components.
// Using ThemeBasedStyledInterface
// const FontWrapper = styled.a`
//   font-size: 40px;
// `;

export default class Header extends React.Component{
  
  render() {
    return (
        //  <div style={{fontFamily: 'Bahiana'}}>
         <div>
         
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    {/* <LinkContainer style={{fontSize: '40px', fontFamily: 'Bahiana'}} to='/home'> */}
                        {/* <NavItem eventKey={1}> */}
                            <Navbar.Brand style={{fontSize: '40px', fontFamily: 'Bahiana'}}>
                                Techster Solutions
                            </Navbar.Brand>
                            <Navbar.Toggle></Navbar.Toggle>
                        {/* </NavItem>   */}
                    {/* </LinkContainer> */}
                </Navbar.Header>  
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer style={{fontSize: '28px', fontFamily: 'Bahiana'}} to='/home'>
                            <NavItem eventKey={2}>
                                Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer style={{fontSize: '28px', fontFamily: 'Bahiana'}} to='/ourservices'>
                            <NavItem eventKey={3}>
                                Our Services
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer style={{fontSize: '28px', fontFamily: 'Bahiana'}} to='/aboutus'>
                            <NavItem  eventKey={1}>
                                About Us
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer style={{fontSize: '28px', fontFamily: 'Bahiana'}} to='/contactus'>
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

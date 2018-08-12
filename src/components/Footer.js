import * as React from 'react';
import '../css/App.css';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Footer extends React.Component{
  
  render() {
    return (
        <div>
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

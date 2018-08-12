import * as React from 'react';
import logo from '../images/logo_transparent.png';
import '../css/App.css';
import SimpleMap from '../components/SimpleMap'
import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Home extends React.Component{
  
  render() {
    return (
      <div >
        <div>
          <p style={{textAlign:'center'}}>THIS PAGE IS UNDER CONSTRUCTION</p>
        </div>
        <div className="App"> 
          <img src={logo} alt="logo" className="responsive"/>
        </div>
      </div>
    );
  }
}

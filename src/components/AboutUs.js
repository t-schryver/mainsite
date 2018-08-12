import * as React from 'react';
import logo from '../images/logo_transparent.png';
import '../css/App.css';

export default class AboutUs extends React.Component{

  render() {
    return (
      <div >
        <div>
          <p style={{textAlign:'center'}}>About Us</p>
        </div>
        <div className="App"> 
          <img src={logo} alt="logo" className="responsive"/>
        </div>
      </div>
    );
  }
}

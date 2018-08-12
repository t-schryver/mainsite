import * as React from 'react';
import logo from '../images/logo_transparent.png';
import '../css/App.css';
import SimpleMap from './SimpleMap';
// import { Form, Text, Scope } from 'informed';

export default class ContactUs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  

  render() {
    return (
      <div >
        <div>
          <SimpleMap />
        </div>
        <div>
          <span style={{fontFamily:'Cabin Sketch', fontSize:'36px', fontWeight: '400', color: '#333333'}}>Contact Us </span>
        </div>
        <form >
          <p>Please get in touch with us by filling out our contact form below.
             The more details you can provide about your interests or requirements,
              the more value we can provide in following up! Thank you.</p>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="App"> 
          <img src={logo} alt="logo" className="responsive"/>
        </div>
      </div>
    );
  }
}

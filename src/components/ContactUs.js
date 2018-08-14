import * as React from 'react';
import logo from '../images/linkedin_banner_image_2.png';
import '../css/App.css';
import SimpleMap from './SimpleMap';
import {FormGroup, Form, ControlLabel, InputGroup, FormControl, HelpBlock} from 'react-bootstrap'
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
        <div className="col col-lg-12" style={{padding: '5px 25px 35px 50px'}}>
          <div className="col-sm-8" style={{padding: '5px 10px 10px 10px'}}>
            <div>
              <span style={{fontFamily:'Cabin Sketch', fontSize:'36px', fontWeight: '400', color: '#333333'}}>Contact Us </span>
            </div>  
            <div className="">
              <Form>
                <p>Please get in touch with us by filling out our contact form below.
                  The more details you can provide about your interests or requirements,
                  the more value we can provide in following up! Thank you.
                </p>
                <FormGroup
                  controlId="formName"
                >
                  <ControlLabel>Name*</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter name"
                  />
                  <FormControl.Feedback />
                  <HelpBlock>First and last name</HelpBlock>
                </FormGroup>
                <FormGroup
                  controlId="formEmail"
                >
                  <ControlLabel>Email*</ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>@</InputGroup.Addon>
                    <FormControl
                      type="text"
                      placeholder="Enter Email"
                    />
                  </InputGroup>
                  <FormControl.Feedback />
                  <HelpBlock>Enter a valid email address.</HelpBlock>
                </FormGroup>
                <FormGroup
                  controlId="formSubject"
                >
                  <ControlLabel>Subject</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Subject"
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Enter a subject to better inform us.</HelpBlock>
                </FormGroup>
                <div className="form-group">
                  <label for="comment">Your Message:</label>
                  <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
                <br/>
                <button className='btn btn-primary btn-md'>Submit</button>
              </Form>
            </div>
          </div>
          <div className="col-sm-4 " style={{padding: '5px 10px 10px 10px'}}>
            <span style={{fontFamily:'Cabin Sketch', fontSize:'24px', fontWeight: '400', color: '#333333'}}>
              OUR OFFICE
            </span>
            <p>
              8210 West Ohio State Lane 
              Lancaster, OH 43130
            </p>
            <span 
              style={{fontFamily:'Cabin Sketch', fontSize:'24px', fontWeight: '400', color: '#333333'}}>  
              PREFER TO PICK UP THE PHONE?
            </span>
            <p>
              If you wish to schedule a capabilities call or get some quick questions answered, call us at 614-715-6223.
            </p>
            <span 
              style={{fontFamily:'Cabin Sketch', fontSize:'24px', fontWeight: '400', color: '#333333'}}>  
              WANT A JOB?
            </span>
            <p>
               We are always looking for great people! Visit our careers page to see what we have to offer.
            </p>
          </div>
        </div>
        <div className="App"> 
          <img src={logo} alt="logo" className="responsive"/>
        </div>
      </div>
    );
  }
}

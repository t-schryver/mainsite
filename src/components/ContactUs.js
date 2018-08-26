import * as React from 'react';
import logo from '../images/linkedin_banner_image_2.png';
import '../css/App.css';
import SimpleMap from './SimpleMap';
import {FormGroup, Form, ControlLabel, InputGroup, FormControl, HelpBlock} from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Swing from 'react-reveal/Swing';


export default class ContactUs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = () => {
    this.setState((prevState, props) => {
      return {value:!prevState.value}});
  }

  handleSubmit = () => {
    alert('A name was submitted: ' + this.state.value);
  }
  
  render() {
    return (
      <div >
        <div>
          <Zoom>
            <SimpleMap />
          </Zoom>
        </div>
        <div className="col col-lg-12" style={{padding: '5px 25px 35px 50px'}}>
          <div className="col-sm-8" style={{padding: '5px 10px 10px 10px'}}>
            <div>
              <span style={{fontFamily:'Cabin Sketch', fontSize:'36px', fontWeight: '400', color: '#333333'}}>Contact Us </span>
            </div>  
            <div className="">
              <Form>
                <Rotate bottom-left>
                  <p>Please get in touch with us by filling out our contact form below.
                    The more details you can provide about your interests or requirements,
                    the more value we can provide in following up! Thank you.
                  </p>
                </Rotate>
                <FormGroup
                  controlId="formName"
                >
                <Swing>
                  <ControlLabel>Name*</ControlLabel>
                </Swing>
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
                <Swing>
                  <ControlLabel>Email*</ControlLabel>
                </Swing>
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
                <Swing>
                  <ControlLabel>Subject</ControlLabel>
                </Swing>
                  <FormControl
                    type="text"
                    placeholder="Enter Subject"
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Enter a subject to better inform us.</HelpBlock>
                </FormGroup>
                <div className="form-group">
                  <label htmlFor="comment">Your Message:</label>
                  <textarea className="form-control" rows="5" id="comment"></textarea>
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
        <Zoom>
        <div className="App"> 
          <img src={logo} alt="logo" className="responsive"/>
        </div>
        </Zoom>
      </div>
    );
  }
}

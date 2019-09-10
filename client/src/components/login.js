import React,{Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from '../logo.svg';


const login = (props) => {


    return (
        <div className="main-container">
        <Fragment>
        <div>
        
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
        </div>
      
        <Form>
            <FormGroup>
                <Label for="emailField">Email</Label>
                <Input type="email" name="email" id="emailField" placeholder="gekko@gmail.com" />
            </FormGroup>
            <FormGroup>
                <Label for="passwordField">Password</Label>
                <Input type="password" name="password" id="passwordField" placeholder="********" />
            </FormGroup>
            <Button className="btn btn-info">Login</Button>
        </Form>
        </Fragment>
        </div>
        
    )

}
export default login;
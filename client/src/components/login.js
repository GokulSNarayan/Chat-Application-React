import React,{Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import logo from '../logo.svg';


const login = (props) => {


    return (
        <div className="flex flex-wrap flex-col items-center justify-start h-screen">
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
      
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" for="emailField">Email</Label>
                <Input className= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="emailField" placeholder="gekko@gmail.com" />
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className="block text-gray-700 text-sm font-bold mb-2" for="passwordField">Password</Label>
                <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="passwordField" placeholder="********" />
            </FormGroup>
            <div class="flex items-center justify-between">
            <Button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</Button>
            </div>
        </Form>
        </Fragment>
        </div>
        
    )

}
export default login;
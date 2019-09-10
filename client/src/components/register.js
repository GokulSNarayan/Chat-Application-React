import React from 'react';
import { Button, Form, FormGroup, Label, Input,} from 'reactstrap';

const register = (props) => {


    return (
        <div className="main-container">
        <Form>
            <FormGroup>
                <Label for="userNameField">User Name</Label>
                <Input type="text" name="user_name" id="userNameField" placeholder="Gekko" />
            </FormGroup>
            <FormGroup>
                <Label for="emailField">Email</Label>
                <Input type="email" name="email" id="emailField" placeholder="gekko@gmail.com" />
            </FormGroup>
            <FormGroup>
                <Label for="passwordField">Password</Label>
                <Input type="password" name="password" id="passwordField" placeholder="********" />
            </FormGroup>
            <Button className="btn btn-info">Register</Button>
        </Form>
        </div>
    )

}
export default register;
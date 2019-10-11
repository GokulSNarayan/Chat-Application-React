import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import {API_URL} from '../constants/defaultValues';
import axios from 'axios';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        axios.post(`${API_URL}/users/register`,{email,password})
        .then(res => 
            console.log("response",res))
    }

    return (
        <div className="flex flex-wrap flex-col items-center justify-center">
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" for="userNameField">User Name</Label>
                <Input className= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="user_name" id="userNameField" placeholder="Gekko" />
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" for="emailField">Email</Label>
                <Input className= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="emailField" placeholder="gekko@gmail.com" 
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" for="passwordField">Password</Label>
                <Input className= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="passwordField" placeholder="********" 
                onChange={e => setPassword(e.target.value)}
                value={password}/>
            </FormGroup>
            <div class="flex items-center justify-between">
            <Button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleRegister}>Register</Button>
            </div>
        </Form>
        </div>
    )

}
export default Register;
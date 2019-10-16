import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import {API_URL} from '../constants/defaultValues';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Register = (props) => {
    const [user_name, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        axios.post(`${API_URL}/users/register`,{email,password,user_name})
        .then(res => 
            console.log("response",res))
    }

    return (
        <div className="flex flex-wrap flex-col items-center justify-center" >
        <Form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{backgroundColor:"#363940",}}>
        <div className="text-center text-white text-xl font-light"><h2>Create an account</h2></div>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" style={{color:"#8D9196"}} for="userNameField">User Name</Label>
                <Input style={{backgroundColor:"#303338"}} className= "shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" name="user_name" id="userNameField"       
                  onChange={e => setUserName(e.target.value)}
                value={user_name}/>
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" style={{color:"#8D9196"}} for="emailField">Email</Label>
                <Input style={{backgroundColor:"#303338"}} className= "shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="emailField"  
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" style={{color:"#8D9196"}} for="passwordField">Password</Label>
                <Input style={{backgroundColor:"#303338"}} className= "shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="passwordField"           
                 onChange={e => setPassword(e.target.value)}
                value={password}/>
            </FormGroup>
            <div class="flex items-center justify-between">
            <Button className="bg-teal-500 hover:bg-teal-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleRegister}>Register</Button>
            </div>
            <div className="py-2 flex flew-wrap justify-start"><span className="text-teal-600"><NavLink to='/login'>Already have an account ?</NavLink> </span></div>
        </Form>
        </div>
    )

}
export default Register;
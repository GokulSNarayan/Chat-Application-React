import React,{useState,useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUser } from '../redux/actions';
import swal from 'sweetalert';
import { API_URL, SOCKET_URL } from '../constants/defaultValues';
import axios from 'axios';

const Register = (props) => {
    const [user_name, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    


    const handleRegister = () => {
        console.log("handle Register")
        axios.post(`${API_URL}/users/register`,{
            user_name,
            email,
            password
        })
        .then(result => {
            if(result.data.status==1){
                swal("Registration Complete !",result.data.message, "success",{
                    buttons:false,
                    timer:2000
                });
            } else {
                swal("Registration Failed!",result.data.message, "error",{
                    buttons:false,
                    timer:2000
                });
            }
        })
        // props.registerUser({email,password,user_name},props.history)
        
    }

    return (
        <div className="flex flex-wrap flex-col items-center justify-center" >
        <Form className="shadow-md rounded p-12" style={{backgroundColor:"#363940",}}>
        <div className="text-center text-white text-2xl pb-4 font-light">Create an account</div>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2 " style={{color:"#8D9196"}} for="userNameField">User Name</Label>
                <Input style={{backgroundColor:"#303338"}} autoComplete="off" className= "font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"  type="text" name="user_name" id="userNameField"       
                  onChange={e => setUserName(e.target.value)}
                value={user_name}/>
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" style={{color:"#8D9196"}} for="emailField">Email</Label>
                <Input style={{backgroundColor:"#303338"}} autoComplete="off" className= "font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="emailField"  
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className= "block text-gray-700 text-sm font-bold mb-2" style={{color:"#8D9196"}} for="passwordField">Password</Label>
                <Input style={{backgroundColor:"#303338"}} className= "font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="passwordField"           
                 onChange={e => setPassword(e.target.value)}
                value={password}/>
            </FormGroup>
            <div className="flex items-center justify-between">
            <Button className="bg-teal-500 hover:bg-teal-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleRegister}>Register</Button>
            </div>
            <div className="pt-2 flex flew-wrap justify-start"><span className="text-teal-600"><NavLink to='/login'>Already have an account ?</NavLink> </span></div>
        </Form>
        </div>
    )

}

const mapStateToProps = ({ authUser }) => {
    const { user } = authUser;
    return { user };
};


export default connect(
    mapStateToProps,
    {
        registerUser
    }
)(Register);
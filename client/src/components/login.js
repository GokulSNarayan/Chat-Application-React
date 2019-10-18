import React,{Fragment,useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import logo from '../logo.svg';
import {API_URL} from '../constants/defaultValues';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../redux/actions';

// import image from '../images/53893.jpg';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

// console.log("props at login",props)
   const handleLogin = () => {
        // axios.post(`${API_URL}/users/login`,{email,password})
        // .then(res => {
        //     console.log("res======>>>",res)
        //     let {token} = res.data
        //     localStorage.setItem('token',token)
        // })
        props.loginUser({email,password}, props.history )
    }


    // console.log("email=====>>",email)
    return (
        <div className="flex"  >
        <Fragment>
        {/* <div>
        
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
        </div> */}
        <Form className="shadow-md rounded p-4 lg:p-12 sm:p-6 self-center   " style={{backgroundColor:"#363940",height:"auto"}}>
            <div className="text-center text-white text-xl sm:text-lg font-light"><h2>Welcome Back !</h2></div>
            <FormGroup className="mb-4">
                <Label className= "block text-sm font-bold mb-2" for="emailField" style={{color:"#8D9196"}}>Email</Label>
                <Input style={{backgroundColor:"#303338"}} className= "shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="emailField"  
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            </FormGroup>
            <FormGroup className="mb-4">
                <Label className="block text-sm font-bold mb-2" for="passwordField" style={{color:"#8D9196"}}>Password</Label>
                <Input style={{backgroundColor:"#303338"}} className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="passwordField"  
                onChange={e => setPassword(e.target.value)}
                value={password}/>
            </FormGroup>
            <div className="flex items-center justify-between">
            <Button className="bg-teal-500 hover:bg-teal-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogin}>Login</Button>
            </div>
            <div className="pt-3 m-1 flex flew-wrap justify-start"><span className="px-1" style={{color:"#6B6F76"}}><h4>Need an account ?</h4></span> <span className="text-teal-600"><NavLink to='/register'>Register</NavLink></span></div>
        </Form>
        </Fragment>
        </div>
        
    )

};

const mapStateToProps = ({authUser}) => {
    const {user, loading} = authUser;
    return {user, loading};
};


export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(Login);
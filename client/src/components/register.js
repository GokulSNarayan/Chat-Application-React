import React, { useState } from 'react';
import { Button,  FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUser } from '../redux/actions';
import swal from 'sweetalert';
import { API_URL } from '../constants/defaultValues';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';

const Register = (props) => {
    



    const handleRegister = (values) => {
        // console.log("handle Register",values);

        axios.post(`${API_URL}/users/register`, {values})
            .then(result => {
                if (result.data.status === 1) {
                    swal("Registration Complete !", result.data.message, "success", {
                        buttons: false,
                        timer: 2000
                    });
                } else {
                    swal("Registration Failed!", result.data.message, "error", {
                        buttons: false,
                        timer: 2000
                    });
                }
            })
        // props.registerUser({email,password,user_name},props.history)

    }

    const handleValidate = (values) => {
        let errors = {};
        if(!values.user_name){
            errors.user_name = 'This field is required';
        }  
        if (!values.email) {
            errors.email = 'This field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'This field is required';
        }

        return errors;
    }

    return (
        <div className="flex flex-wrap flex-col items-center justify-center" >
            <Formik
                validate={handleValidate}
                initialValues={{
                    user_name:'',
                    email: '',
                    password: ''
                }}
                onSubmit={handleRegister}>
                {({ errors, touched, isValidating }) => (
                    <Form className="shadow-md rounded p-4 lg:p-12 sm:p-6 self-center   " style={{ backgroundColor: "#363940", height: "auto" }}>
                        <div className="text-center text-white text-2xl pb-4 font-light">Create an account</div>
                        <FormGroup className="mb-4">
                            <Label className="flex items-center text-sm font-bold mb-2" for="user_name" style={{ color: "#8D9196" }}>
                            User Name
                                {errors.user_name && touched.user_name ?
                                    <div className="text-xs font-light pl-1" style={{ color: "#f04747" }}>{`  -  ${errors.user_name}`}</div>
                                    : null}
                            </Label>
                            <Field className="font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                style={{ backgroundColor: "#303338" }} name="user_name" autoComplete="off" />
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Label className="flex items-center text-sm font-bold mb-2" for="email" style={{ color: "#8D9196" }}>
                                Email
                                {errors.email && touched.email ?
                                    <div className="text-xs font-light pl-1" style={{ color: "#f04747" }}>{`  -  ${errors.email}`}</div>
                                    : null}
                            </Label>
                            <Field className="font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                style={{ backgroundColor: "#303338" }} name="email" autoComplete="off" />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label className="flex items-center text-sm font-bold mb-2" for="password" style={{ color: "#8D9196" }}>
                                Password
                                {errors.password && touched.password ?
                                    <div className="text-xs font-light pl-1" style={{ color: "#f04747" }}>{`  -  ${errors.password}`}</div>
                                    : null}
                            </Label>
                            <Field className="font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                name="password" type="password"
                                style={{ backgroundColor: "#303338" }} autoComplete="off" />

                        </FormGroup>
                        <div className="flex items-center justify-between">
                            <Button className="bg-teal-500 hover:bg-teal-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">Register</Button>
                        </div>
                        <div className="pt-2 flex flew-wrap justify-start"><span className="text-teal-600"><NavLink to='/login'>Already have an account ?</NavLink> </span></div>

                    </Form>
                )}
            </Formik>

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
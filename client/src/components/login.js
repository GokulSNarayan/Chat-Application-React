import React, { Fragment} from 'react';
import { Button,FormGroup, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';
import { BounceLoader } from 'halogenium';
import { Field, Form, Formik } from 'formik';
// import image from '../images/53893.jpg';


const Login = (props) => {
    


    const handleLogin = (values) => {
        // console.log("values",values)
        props.loginUser(values, props.history)
    }

    const handleValidate = (values) => {
        let errors = {};

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
        <div className="flex"  >
            <Fragment>
                <Formik
                    validate={handleValidate}
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={handleLogin}>
                    {({ errors, touched, isValidating }) => (
                        <Form className="shadow-md rounded p-4 lg:p-12 sm:p-6 self-center   " style={{ backgroundColor: "#363940", height: "auto" }}>
                            <div className="text-center text-white text-xl pb-2 sm:text-lg font-light"><h2>Welcome Back !</h2></div>
                            <FormGroup className="mb-4">
                            <Label className="flex items-center text-sm font-bold mb-2" for="email" style={{ color: "#8D9196" }}>
                                Email
                                {errors.email && touched.email ?
                                    <div className="text-xs font-light pl-1" style={{color:"#f04747"}}>{`  -  ${errors.email}`}</div>
                                : null}
                                </Label>
                                <Field className="font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                style={{ backgroundColor: "#303338" }} name="email" autoComplete="off" />
                            </FormGroup>

                            <FormGroup className="mb-4">
                            <Label className="flex items-center text-sm font-bold mb-2" for="password" style={{ color: "#8D9196" }}>
                                Password
                                {errors.password && touched.password ?
                                    <div className="text-xs font-light pl-1" style={{color:"#f04747"}}>{`  -  ${errors.password}`}</div>
                                : null}
                                </Label>
                                <Field className="font-normal text-white shadow appearance-none border border-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" 
                                name="password" type="password"
                                style={{ backgroundColor: "#303338" }} autoComplete="off" />
                                
                            </FormGroup>
                            {props.loading ? <div className="flex justify-center">
                                <BounceLoader color="#26A65B" size="30px" margin="4px" />
                            </div> :
                                <div className="flex items-center justify-between">
                                    <Button className="bg-teal-500 hover:bg-teal-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                      type="submit" >Login</Button>
                                </div>}
                            <div className="pt-3 m-1 flex flew-wrap justify-start">
                                <span className="px-1" style={{ color: "#6B6F76" }}><h4>Need an account ?</h4></span>
                                <span className="text-teal-600"><NavLink to='/register'>Register</NavLink></span>
                            </div>


                        </Form>
                    )}
                </Formik>
            </Fragment>
        </div>

    )

};

const mapStateToProps = ({ authUser }) => {
    const { user, loading } = authUser;
    return { user, loading };
};


export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(Login);
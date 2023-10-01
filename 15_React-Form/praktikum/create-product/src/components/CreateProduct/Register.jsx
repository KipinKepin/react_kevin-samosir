import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
};

const labelStyle = {
    display: 'block',
    margin: '8px 0',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
};

const errorStyle = {
    color: 'red',
};

const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'First name must be at least 3 characters')
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Last name must be at least 3 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});

function Register() {
    return (
        <div style={formStyle}>
            <h1>Registration Form</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    // Handle form submission here
                    console.log(values);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <label htmlFor="firstName" style={labelStyle}>
                                First Name
                            </label>
                            <Field type="text" name="firstName" style={inputStyle} />
                            <ErrorMessage name="firstName" component="div" style={errorStyle} />
                        </div>

                        <div>
                            <label htmlFor="lastName" style={labelStyle}>
                                Last Name
                            </label>
                            <Field type="text" name="lastName" style={inputStyle} />
                            <ErrorMessage name="lastName" component="div" style={errorStyle} />
                        </div>

                        <div>
                            <label htmlFor="email" style={labelStyle}>
                                Email
                            </label>
                            <Field type="email" name="email" style={inputStyle} />
                            <ErrorMessage name="email" component="div" style={errorStyle} />
                        </div>

                        <div>
                            <label htmlFor="password" style={labelStyle}>
                                Password
                            </label>
                            <Field type="password" name="password" style={inputStyle} />
                            <ErrorMessage name="password" component="div" style={errorStyle} />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" style={labelStyle}>
                                Confirm Password
                            </label>
                            <Field type="password" name="confirmPassword" style={inputStyle} />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                style={errorStyle}
                            />
                        </div>

                        <div>
                            <button type="submit" style={buttonStyle}>
                                Register
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register;

import React, { Component } from 'react';

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            },
        };
    }

    validateForm = () => {
        let valid = true;
        const { email, password } = this.state;
        const errors = {
            email: '',
            password: '',
        };

        // Validasi Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Email tidak valid';
            valid = false;
        }

        // Validasi Password
        if (password.length < 8) {
            errors.password = 'Password harus memiliki panjang minimal 8 karakter';
            valid = false;
        }

        this.setState({ errors });
        return valid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            // Handle login here
            console.log('Login successful');
        } else {
            console.log('Login failed. Please check the form for errors.');
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password, errors } = this.state;

        return (
            <div style={formStyle}>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email" style={labelStyle}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            style={inputStyle}
                        />
                        {errors.email && <div style={errorStyle}>{errors.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="password" style={labelStyle}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            style={inputStyle}
                        />
                        {errors.password && <div style={errorStyle}>{errors.password}</div>}
                    </div>

                    <div>
                        <button type="submit" style={buttonStyle}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
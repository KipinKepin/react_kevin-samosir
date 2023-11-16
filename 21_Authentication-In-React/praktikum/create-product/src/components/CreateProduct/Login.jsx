import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const dummyUser = { username: 'admin', password: 'password123' };
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            // User exists in local storage, set user data
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', JSON.stringify(storedUser));
            // Navigate to the CreateProduct page
            navigate('/create');
        } else if (username === dummyUser.username && password === dummyUser.password) {
            // Dummy user is used for initial login, set user in local storage and navigate
            localStorage.setItem('user', JSON.stringify(dummyUser));
            localStorage.setItem('isLoggedIn', true);
            // Navigate to the CreateProduct page
            navigate('/create');
        } else {
            // Invalid username or password
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleLogin} className="mt-3">
                <div className="container">
                    <h1 className='text-center'>Login</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Login;

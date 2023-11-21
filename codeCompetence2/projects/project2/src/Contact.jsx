import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = document.getElementById('first').value;
        const lastName = document.getElementById('last').value;
        const email = document.getElementById('email').value;
        const help = document.getElementById('help').value;
        alert(`First Name : ${firstName}\nLast Name : ${lastName}\nEmail : ${email}\nQuestion : ${help}`);
        document.getElementById('first').value = '';
        document.getElementById('last').value = '';
        document.getElementById('email').value = '';
        document.getElementById('help').value = '';
    };

    return (
        <div>
            <Navbar />
            <div className="container contact">
                <div className="row" style={{ backgroundColor: '#212121', padding: '50px', borderRadius: '50px', opacity: '.8' }}>
                    <div className="col">
                        <h1 className="fw-bold">Contact us</h1>
                        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the <a href="">department email</a> you'd like to contact below</p>
                    </div>
                    <div className="col">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="first">First name*</label>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="last">Last name*</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" id="first" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="last" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col">
                                        <label htmlFor="email">Email*</label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col">
                                        <label htmlFor="help">What can we help you with?</label>
                                        <textarea className="form-control" aria-label="With textarea" id="help"></textarea>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col">
                                        <button className="btn tombol" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

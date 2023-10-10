import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="welcome-section mt-5">
                <div className="container">
                    <h1>Welcome, Tiger Mania!</h1>
                    <p><em>I know what I want and I'm gonna get it.</em></p>
                    <Link className="btn btn-primary" to='/contact'>Talk to me</Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
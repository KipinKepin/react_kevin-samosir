import React from 'react'
import Logo from './images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand mt-2 " href="">
                        <img src={Logo} width="120" height="80" className="d-inline-block" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="">Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light border-bottom box-shadow mb-3">
            <div className="container-fluid">
                <a href="/" alt="Navigation to home page"><img id="brand-image" className="navbar-brand" src="/images/chrisjohannesson.png" alt="Chris Johannesson" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/test-page">Test Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="#">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;


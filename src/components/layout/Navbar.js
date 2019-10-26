import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light background-custom" id="main-nav">
            <div className="container">
                <Link className="navbar-brand" to="/user-finder">
                    <h4 className="align-middle text-white d-inline"><i className={icon}></i> {title}</h4>
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavId">
                    <span className="navbar-toggler-icon toggle"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/user-finder">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#authors">Meet The Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'GITHUB FINDER',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

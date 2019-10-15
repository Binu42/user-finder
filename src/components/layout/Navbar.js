import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        title: 'GITHUB FINDER',
        icon: 'fab fa-github'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light background-custom" id="main-nav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <h4 className="align-middle text-white d-inline"><i className={this.props.icon}></i> {this.props.title}</h4>
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavId">
                        <span className="navbar-toggler-icon toggle"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#authors">Meet The Authors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
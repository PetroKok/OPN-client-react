import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/tariff" className="nav-link">Tariff</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile/messages" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order-info/8672345" className="nav-link">Order Info</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;

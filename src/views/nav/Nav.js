import React, { Component } from 'react'

import {
    NavLink,
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/todo" className="nav-link">
                                Todos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Nav
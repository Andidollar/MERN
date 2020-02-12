import React, {Component} from 'react';
import '../index.css';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                        <Nav.Link><Link to="/login">Log in</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> )
    }
}

// export default Footer
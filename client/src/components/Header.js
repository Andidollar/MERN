import React, {Component} from 'react';
import {connect} from "react-redux";
import '../index.css';
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {logOut} from "../store/actions/loginActions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false
    }
};
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                               
                <NavLink to="/register">Register&nbsp;</NavLink> 
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/login" onClick={() => this.props.logOut()}>
                Log Out
                </NavLink>
                        </Nav>
            </Navbar.Collapse>
        </Navbar> )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      logOut: () => dispatch(logOut())
    };
  };
  
  const mapStateToProps = state => {
    return {
      isLoggedIn: state.isLoggedIn
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);

// export default Footer
                // <Nav className="mr-auto">
                // {this.state.isLoggedIn ? (<Nav>
                // <NavLink to="/login" onClick={() => this.props.logOut()}>
                // Log Out
                // </NavLink></Nav>
                //  ) : (<Nav>
                // <NavLink to="/register">Register&nbsp;</NavLink> 
                // <NavLink to="/login">Log in</NavLink></Nav>)}
                //         </Nav>
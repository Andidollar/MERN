import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Header from './Header';
// import Axios from 'axios';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import registerNow from "../store/actions/registerActions";
// import {Redirect} from 'react-router'
// import Grid from 'react-css-grid';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: '',
            username: '',
            message: '',
            email: '',
            password: '',
            isError: false,
            error: false,
            isRegistered: false
        }
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    };
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.picture || !this.state.username || !this.state.email || !this.state.password) {
            console.log("not filled");
            this.setState({isError: true, error: 'All fields are required'});
        } else {
            this.setState({isError: false, error: 'No errors'});

            // Axios
            //     .post("http://localhost:5000/users", {
            //     picture: this.state.picture,
            //     username: this.state.username,
            //     email: this.state.email,
            //     password: this.state.password
            // })
            //     .then(res => {
            //         console.log(res);
            //         this.setState({isRegistered: true});
            //     })                
            //     .catch(err => {
            //         this.setState({isError: true, error: err.response.data});
            //         console.log(err.response);
            //     });

            let body = {picture: this.state.picture,
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                        }
                        console.log(body)
            this.props.registerNow(body)
        }
    }

    errorMessage() {
        return <div>{this.state.error}</div>;
    }
    
    errorMessage1() {
        return <div>{this.props.register.message}</div>;
    }

    isRegistered() {
        return (
            <div>
                <p>Thank you for registering!</p><Link to="/login"><p>Log in</p></Link>
            </div>
        );
    }


    render() {
        
        const {isRegistered, error} = this.props.register
        
        return (
            <div>
                <Header/>
                
                    <h2 style={{
                        paddingBottom: 10
                    }}>Registration</h2>
                    {isRegistered
                    ? this.isRegistered()
                    : null}
                    {this.state.isError
                        ? this.errorMessage()
                        : null}
                    {error
                    ? this.errorMessage1()
                    : null} 
                        <Form
                    onSubmit={this.onSubmit}
                    style={{
                    padding: 10
                }}>
                    <Form.Group>
                        <Form.Label>Profile picture (url)</Form.Label>
                        <Form.Control
                            name="picture"
                            placeholder="Paste url for profile photo"
                            id="picture-input"
                            type="url"
                            className="validate"
                            value={this.state.picture}
                            onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            placeholder="Enter unique username"
                            id="username-input"
                            type="text"
                            className="validate"
                            value={this.state.username}
                            onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            placeholder="Enter email address"
                            id="email-input"
                            type="email"
                            className="validate"
                            value={this.state.email}
                            onChange={this.onChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            placeholder="12345678"
                            id="password-input"
                            type="password"
                            className="validate"
                            value={this.state.password}
                            onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("Redux", state)
    return {
    register: state.register,
    message: state.message
    };
  };
  
  export default connect(
    mapStateToProps,
    { registerNow }
  )(Register);

/* <Form.Group controlId="formBasicPic">
                        <Form.Label>Upload picture</Form.Label>
                        <Form.Control type="file" style={{
                        cursor: 'pointer',
                        display: 'inline-block' }}/>
                    </Form.Group> */
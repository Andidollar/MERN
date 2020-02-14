import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Header from './Header';
import {Redirect} from "react-router-dom";
import Axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isError: false,
            error: '',
            isLoggedIn: false
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
        if (!this.state.email || !this.state.password) {
            console.log("not filled");
            this.setState({isError: true, error: "All fields are required."});
        } else {
            this.setState({isError: false, error: "no errors."});

            Axios
                .post("http://localhost:5000/login", {
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    console.log(res);
                    this.setState({isLoggedIn: true});
                })
                .catch(err => {
                    this.setState({isError: true, error: err.response.data});
                    console.log(err.response);
                });
        }
    }

    errorMessage() {
        return <div>{this.state.error}</div>;
    }

    isLoggedIn() {
        return (
            <div>
                <Redirect to="/cities"/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header/>

                <h2 style={{
                    paddingBottom: 10
                }}>Log in</h2>
                {this.state.isLoggedIn
                    ? this.isLoggedIn()
                    : null}
                {this.state.isError
                    ? this.errorMessage()
                    : null}
                <Form
                    onSubmit={this.onSubmit}
                    style={{
                    padding: 10
                }}>
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
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            placeholder="Enter password"
                            id="password-input"
                            type="password"
                            className="validate"
                            value={this.state.password}
                            onChange={this.onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                </Form>
                <Footer/>
            </div>
        )
    }
}

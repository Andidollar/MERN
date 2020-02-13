import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Header from './Header';

class Login extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <Form
                    // onSubmit={this.onSubmit}
                    style={{
                    padding: 10
                }}>
                    <h2 style={{
                        paddingBottom: 10
                    }}>Log in</h2>
                        {/* {this.state.isError
                        ? this.errorMessage()
                        : null} */}
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            placeholder="Enter username"
                            id="username-input"
                            type="text"
                            className="validate"
                            // value={this.state.username}
                            // onChange={this.onChange}                                
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            placeholder="Enter email address"
                            id="email-input"
                            type="email"
                            className="validate"
                            // value={this.state.email}
                            // onChange={this.onChange}                                
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            placeholder="12345678"
                            id="password-input"
                            type="password"
                            className="validate"
                            // value={this.state.password}
                            // onChange={this.onChange}                                
                            />
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

export default Login

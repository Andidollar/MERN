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
                
                    <h2 style={{
                        paddingBottom: 10
                    }}>Log in</h2>
                        {/* {this.state.isError
                        ? this.errorMessage()
                        : null} */}
                        <Form
                    // onSubmit={this.onSubmit}
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
                            // value={this.state.email}
                            // onChange={this.onChange}                                
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            placeholder="Enter password"
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

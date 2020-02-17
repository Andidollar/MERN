import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Header from './Header';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
// import {GoogleLogin} from 'react-google-login';
// import {googleClientID} from '../GoogleKeys';
// import {GoogleLoginButton} from "react-social-login-buttons";

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
        // const responseGoogle = (response) => {
        //     console.log(response);
        //   }
           
        //   ReactDOM.render(
        //     <GoogleLogin
        //       clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        //       buttonText="Login"
        //       onSuccess={responseGoogle}
        //       onFailure={responseGoogle}
        //       cookiePolicy={'single_host_origin'}
        //     />,
        //     document.getElementById('googleButton')
        //   );

    //    const responseGoogle = (response) => {
    //         console.log(response);
    //       }

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
                <Button variant="danger" href={"http://localhost:5000/login/google"}>Sign in with Google</Button><br/><br/>
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
                    <div>
                </div>
                </Form>
                <Footer/>
            </div>
        )
    }
}


                /* <GoogleLogin
                    clientId={googleClientID}
                    render={renderProps => (
                      <GoogleLoginButton
                        className="googleBtn"
                        alt="googleLogo"
                        onClick={renderProps.onClick}
                        align={"center"}
                      >
                        <span>Log in with Google</span>
                      </GoogleLoginButton>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                     /> */
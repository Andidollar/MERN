import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Register extends Component {
    render() {
        return (
            <div>
                <Form style={{
                    padding: 10
                }}><h2 style={{
                    paddingBottom: 10
                }}>Registration</h2>
                    <Form.Group controlId="formBasicPic">
                        <Form.Label style={{
                            backgroundColor: 'grey',
                            display: 'inline-block',
                            padding: 10,
                            color: 'white',
                            borderRadius: 5
                        }}>Upload picture</Form.Label>
                        <Form.Control type="file" style={{
                        display: 'none' }}/>                     
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
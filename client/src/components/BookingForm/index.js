import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./style.css";

const BookingForm = () => {

    return (
        <div className="bookingForm">
            <Form>
                <Form.Row>
                    <InputGroup as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </InputGroup>

                    <InputGroup as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </InputGroup>
                </Form.Row>

                <InputGroup controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </InputGroup>

                <InputGroup controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </InputGroup>

                <Form.Row>
                    <InputGroup as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </InputGroup>

                    <InputGroup as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </InputGroup>

                    <InputGroup as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </InputGroup>
                </Form.Row>

                <InputGroup id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </InputGroup>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </div>)
}

export default BookingForm;
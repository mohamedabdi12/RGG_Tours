import React from "react";
import "./style.css";
// import { Col, Button, Container } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'
// import AddressForm from "../BookingForm/AddressForm";

import Checkout from "../BookingForm/CheckoutForm";

// import PaymentForm from "./PaymentForm";

// import Review from "../BookingForm/Review";




const BookingForm = () => {

    return (
        <div className="bookingForm">
            {/* <AddressForm /> */}
            <Checkout />
            {/* <PaymentForm />
            <Review /> */}



            {/* <Container 
            className="Container">
                <Form>
                    <Form.Row >
                        <Col-6>
                            <Form.Group className="firstname" as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="email" placeholder="First Name" />
                            </Form.Group>
                        </Col-6>
                        <Col-6>
                            <Form.Group className="name" as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="Name" placeholder="Last Name" />
                            </Form.Group>
                        </Col-6>
                    </Form.Row>
                    <Col-6>
                        <Form.Group className="Address1" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                    </Col-6>
                    <Col-6>
                        <Form.Group className="Address2" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                    </Col-6>




                    <Form.Row>
                        <Col-4>
                            <Form.Group className="City" as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col-4>

                        <Col-4>
                            <Form.Group as={Col} className="State" controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Form.Group>
                        </Col-4>

                        <Col-4>
                            <Form.Group className="Zip" as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col-4>
                    </Form.Row>

                    <Form.Row >
                        <Col>
                            <Form.Group className="payment" as={Col} controlId="formGridFirstName">
                                <Form.Label>Payment:</Form.Label>
                                <Form.Control type="payment" placeholder="Enter credit card info" />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className="Button" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container> */}
        </div>)
}

export default BookingForm;
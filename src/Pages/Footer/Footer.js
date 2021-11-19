import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-dark">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h5><span className='text-info'>TRAVEL</span>TOUR</h5>
                        <p className="mt-2"><small>TRAVELTOUR is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.</small></p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h3 className="footer-header-color mt-3">Recent News</h3>
                        <hr className="text-light w-25 mx-auto border-1" />
                        <div className="help-list">
                            <a href="#">FAQ</a><br />
                            <a href="#">Support Center</a><br />
                            <a href="#">Payment Security</a><br />
                            <a href="#">Privacy Policy</a><br />
                            <a href="#">EMI</a><br />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h3 className="footer-header-color mt-2">Contact Us</h3>
                        <hr className="text-light w-25 mx-auto border-1" />
                        <Form className="w-75 mx-auto">
                            <Form.Group className="mb-2" controlId="formBasicName">
                                <Form.Label className="ms-0 text-dark">Name</Form.Label>
                                <Form.Control size="sm" type="text" className="bg-transparent" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="ms-0 text-dark">Email*</Form.Label>
                                <Form.Control size="sm" type="text" className="bg-transparent" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-dark">Message*</Form.Label>
                                <Form.Control className="bg-transparent" as="textarea" rows={2} />
                            </Form.Group>
                            <Button className="btn btn-outline-light" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Footer;
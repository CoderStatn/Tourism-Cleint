import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className="bg-img text-center py-5">
            <h3>WHY CHOOSE US ?</h3>
            <div className="container">
                <Row xs={1} md={3} className="g-4 mt-4">
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-star mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">Cost Effective</Card.Title>
                                <Card.Text>
                                    We are fully aware of how hard you have worked for your funds, and we want to save as much as possible on your vacations while also providing the greatest services and other VIP amenities within your budget. This is where our low-cost tour packages from Bangladesh come in. Our tour packages are constructed in such a way that you are certain to have the most enjoyment for the least amount of money in any other agency. We feel that quality is more important than everything else. As a result, your trip will go just as planned, and your level of enjoyment will skyrocket. This is how we earn our clients' trust.
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-globe-asia mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">Quality Assurance</Card.Title>
                                <Card.Text>
                                   This is the second most essential component after the costing factor. If you take one or two weeks off from work, you want them to be the most peaceful and enjoyable weeks of your life. We understand how difficult it is to take time off from work. Many employers will not authorize such a long vacation. When it occurs, though, every second of those days counts and matters to you. As a result, KodeTravel agency is here to ensure that you have nothing but relaxation and pleasure throughout your whole vacation, making it a memorable one for you. We guarantee that at the end of your journey, you will be thoroughly happy and psychologically content.
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <i className="fas fa-thumbs-up mx-auto fw-bold icon-style"></i>
                            <Card.Body>
                                <Card.Title className="fw-bold">Hassle-free traveling</Card.Title>
                                <Card.Text>
                                    What is the purpose of traveling if you have to endure a slew of inconveniences and obstacles? Our skilled staff is on hand to guarantee that this trust-breaking and mood-breaking scenario does not occur. The first thing that might go wrong when you pick your travel package is a visa issue. As previously stated, we were the top visa-processing agency in Bangladesh, therefore this will not be a problem for us. We will just a few papers from you, and the rest will be our problem. Once we have received your visa, the remainder of the procedures are very simple. We will book and purchase your airline tickets for your trip to your location. We will provide you with the top airlines that have...
                                </Card.Text>
                                <Button variant="danger">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ChooseUs;
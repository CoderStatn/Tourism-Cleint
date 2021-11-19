import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TourHandleCases = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-smile fs-1 text-secondary"></i>
                        <h3>72,255</h3>
                        <p className="text-info">HAPPY CUSTOMERS</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-bus-alt fs-1 text-secondary"></i>
                        <h3>152</h3>
                        <p className="text-info">AMAZING TOURS</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-briefcase fs-1 text-secondary"></i>
                        <h3>6,125</h3>
                        <p className="text-info">IN BUSINESS</p>
                    </Col>
                    <Col xs={6} md={3} className="text-center">
                        <i className="fas fa-comments fs-1 text-secondary"></i>
                        <h3>9,254</h3>
                        <p className="text-info">SUPPORT CASES</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourHandleCases;
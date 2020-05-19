import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
class CategoriesCard extends Component {
    render() {
        return (
            <div>
                    <Row xs="4">
                        <Col><Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Row xs="2">
                                    <Col> <img
                                        className="d-block w-100"
                                        src="/images/laptops.jpg"
                                        width={200} height={100} mode='fit'
                                        alt="First slide"
                                    /></Col>
                                    <Col style={{marginTop:'1rem'}}><Card.Title>Laptops</Card.Title>
                                        <Card.Link href="#">Card Link</Card.Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card></Col>
                        <Col> <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Row xs="2">
                                    <Col> <img
                                        className="d-block w-100"
                                        src="/images/laptops.jpg"
                                        width={200} height={100} mode='fit'
                                        alt="First slide"
                                    /></Col>
                                    <Col style={{marginTop:'1rem'}}><Card.Title>Laptops</Card.Title>
                                        <Card.Link href="#">Card Link</Card.Link>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card></Col>
                        <Col> <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Row xs="2">
                                    <Col> <img
                                        className="d-block w-100"
                                        src="/images/laptops.jpg"
                                        width={200} height={100} mode='fit'
                                        alt="First slide"
                                    /></Col>
                                    <Col style={{marginTop:'1rem'}}><Card.Title>Laptops</Card.Title>
                                        <Card.Link href="#">Card Link</Card.Link>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card></Col>
                        <Col> <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Row xs="2">
                                    <Col> <img
                                        className="d-block w-100"
                                        src="/images/laptops.jpg"
                                        width={200} height={100} mode='fit'
                                        alt="First slide"
                                    /></Col>
                                    <Col style={{marginTop:'1rem'}}><Card.Title>Laptops</Card.Title>
                                        <Card.Link href="#">Card Link</Card.Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card></Col>
                    </Row>
            </div>
        );
    }
}

export default CategoriesCard;
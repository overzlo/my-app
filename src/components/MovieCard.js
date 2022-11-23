import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { dataDigitalBestSeller } from './data';

export default class MovieCard extends Component {
    render() {
        return (
            <div>
                    <Row xs={1} md={3} className="g-4">
                         {dataDigitalBestSeller.map((item) => (
                            <Col>
                                <Card >
                                    <Card.Img variant="top" src= {item.linkImg} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

        )
    }
}

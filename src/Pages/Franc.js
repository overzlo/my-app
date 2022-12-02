import React, { Component } from 'react'
import { Card, ListGroup, NavLink } from 'react-bootstrap'
import { franc } from '../components/franc';
import MCU from '../assets/MCU.jpg'
import {  Row, Col } from 'react-bootstrap'
import { mcu } from '../components/mcudata';

export default class Franc extends Component {
    render() {
        return (
            <>
            <main>
                <div className='text-img'>
                    
                        <div className='text-img'>
                            <Card className="bg-dark ">
                                <Card.Img 
                                    src={
                                        MCU
                                    }
                                />
                                <Card.ImgOverlay className='img-overlay'>
                                    <Card.Title className='text-light ' as='h3'>MCU</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    
                </div>

                <div className= 'mt-5'>
                    <Row xs={1} md={3} className="g-4">
                         {mcu.map((item) => (
                            <Col >
                                <Card  >
                                    <Card.Img variant="top" src= {item.img} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.descr}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                </main>
            </>
        )
    }
}

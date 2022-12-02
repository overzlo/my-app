import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import houseofdragon1 from '../assets/kkk.png'

export default class Cartoons extends Component {
  render() {
    return (
      <main>
      Cartoo1ns
        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top"  src={houseofdragon1}
                        alt="HOTD" />
            <Card.Body>
              <Card.Title>House of The Dragons</Card.Title>
              <Card.Text>
              An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
    </Row>
      
      </main>
    )
  }
}

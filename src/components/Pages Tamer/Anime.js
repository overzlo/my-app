import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import houseofdragon1 from '../assets/5.png'

export default class Anime extends Component {
  render() {
    return (
      <main>Anim11e
        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top"  src={houseofdragon1}
                        alt="HOTD" />
            <Card.Body>
              <Card.Title>Chainsaw Man</Card.Title>
              <Card.Text>
              «Я всегда мечтал жить обычной жизнью: спать в тёплой постели, есть тосты с джемом по утрам, ходить на свидания со своей девушкой и улыбаться каждый день. Но всё изменилось со смертью отца — теперь, Почита, мы будем убивать!»
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

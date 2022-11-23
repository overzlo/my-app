import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
   <Container>
    <Row>
      <Col className ='text-center py-4' >
      &copy; All Rights Reserved
      </Col>
    </Row>
   </Container>
  );
};
}
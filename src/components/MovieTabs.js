import React, { Component } from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import MovieCard from './MovieCard'
import MovieintoTabs from './MovieintoTabs'

export default class MovieTabs extends Component {
  render() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
         
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <MovieintoTabs/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <MovieCard/>

              </Tab.Pane>
            </Tab.Content>
          </Col>

          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}

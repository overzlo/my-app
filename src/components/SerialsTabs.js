import React, { Component } from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import FantasyCard from './FantasyCard'
import Movies_Detective_card from './Movies_Detective_card'
import Serials_Fantasy_Card from './Serials_Fantasy_Card'
import Serials_Action_Card from './Serials_Action_Card'

export default class MovieTabs extends Component {
  render() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
         
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <Serials_Action_Card/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Serials_Fantasy_Card/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <Movies_Detective_card/>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
              
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                
              </Tab.Pane>
            </Tab.Content>
          </Col>

          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Action</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Fantasy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Horrors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Adventures</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Comedies</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}

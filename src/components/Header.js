import React, { Component } from 'react'
import { Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Route } from 'react-router';

import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import Serials from '../Pages/Serials';
import Cartoons from '../Pages/Cartoons';
import Anime from '../Pages/Anime';
import FAQ from '../Pages/FAQ';


export default class eader extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed = "top">
            <Container>
              {/* <Navbar.Brand href="/">
                <img
                    src={logo}
                    height="30"
                    width="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                /> React site
            </Navbar.Brand> */}

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ">
                  <Button variant="dark" as={Link} to="/">Home</Button>



                  <Dropdown as={ButtonGroup} >
                    <Button variant="dark" as={Link} to="/movies" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Movies</Button>

                    <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Detectives</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Adventures</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Family</Dropdown.Item>

                    </Dropdown.Menu>
                  </Dropdown>


                  <Dropdown as={ButtonGroup} >
                    <Button variant="dark" as={Link} to="/serials">Serials</Button>

                    <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                    <Dropdown.Menu >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Horrors</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Adventures</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Comedies</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                  <Dropdown as={ButtonGroup} >
                    <Button variant="dark" as={Link} to="/cartoons">Cartoons</Button>

                    <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Detectives</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Adventures</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Comedies</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                  <Dropdown as={ButtonGroup} >
                    <Button variant="dark" as={Link} to="/anime">Anime</Button>

                    <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                    <Dropdown.Menu >
                      <Dropdown.Item href="#/action-1">Senen</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Mecha</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Horrors</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Senen-ai</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Shojo</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Shojo-ai</Dropdown.Item>

                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
                <Form className="d-flex">
                  <Nav className='me-auto'>
                    <Button variant="dark" as={Link} to="/faq">FAQ</Button>
                    <Button variant="dark" href="/about">Login</Button>

                  </Nav>


                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="d-inline mx-2"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/serials' element={<Serials />} />
            <Route path='/cartoons' element={<Cartoons />} />
            <Route path='/anime' element={<Anime />} />

            <Route path='/fAQ' element={<FAQ />} />

          </Routes>
        </Router>
      </>
    );
  }
}



"use client"

import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Sidebar from './SideBar';

export function SideNavbar() {

  const [show, setShow] = useState(false)

  return (
    <>
      <Navbar expand='lg' className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start" className="d-block d-lg-none" 
            sm
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column justify-content-start">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">SouthTeen FC</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

"use client"

import React from 'react';
import { Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import clientLogo from '../pic/LOGO.png'
import SideBar from './SideBar';

export function SideNavbar() {

  return (
    <>
      <Navbar expand='lg' className="bg-primary">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start" className="d-block d-lg-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <SideBar/>
          </Navbar.Offcanvas>
          <Navbar.Brand href="/" className='text-white fw-bold fs-4'>
            <Image src={clientLogo} width={60} height={60} alt="client-logo" className='me-3'/>
            SouthTeen FC</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

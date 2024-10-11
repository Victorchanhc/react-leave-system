"use client"
import React from "react";
import { Col, ListGroup, ListGroupItem, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function SideBar() {
    return (
        <>
            <Navbar.Offcanvas className="col-md-2 bg-dark" responsive="lg">
                <Offcanvas.Body>
                    <Nav className="flex-column justify-content-start container-fluid pt-3 pe-0">
                        <Nav.Link href="#action1" className="navItem">Home</Nav.Link>
                        <Nav.Link href="#action2" className="navItem">Lesson</Nav.Link>
                        <Nav.Link href="#action3" className="navItem">My Account</Nav.Link>
                        <Nav.Link href="#action4" className="navItem">Logout</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>


    )
}
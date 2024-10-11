"use client"
import React from "react";
import { Col, Nav, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function SideBar() {
    return (
        <>
            <Offcanvas className="col-md-2 bg-dark" responsive="lg">
                <Offcanvas.Header >
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column justify-content-start pe-3">
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
            </Offcanvas>
        </>


    )
}
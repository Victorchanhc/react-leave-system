"use client"
import React from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function SideBar() {
    return (
        <>
            <Navbar.Offcanvas className="col-md-2 bg-dark text-white" responsive="lg">
                <Offcanvas.Body>
                    <Nav className="flex-column justify-content-start container-fluid pt-3 pe-0">
                        <Nav.Link href="/" className="navItem">Home</Nav.Link>
                        <Nav.Link href="/lesson" className="navItem">Lesson</Nav.Link>
                        <Nav.Link href="/account" className="navItem">My Account</Nav.Link>
                        <Nav.Link href="/#" className="navItem">Logout</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>


    )
}
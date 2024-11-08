"use client"
import React from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function AdminSideBar() {
    return (
        <>
            <Navbar.Offcanvas className="col-md-2 bg-dark" responsive="lg">
                <Offcanvas.Body>
                    <Nav className="flex-column justify-content-start container-fluid pt-3 pe-0">
                        <Nav.Link href="/admin" className="navItem">Dashboard</Nav.Link>
                        <Nav.Link href="/admin/lessonlist" className="navItem">Lesson List</Nav.Link>
                        <Nav.Link href="/admin/attendants" className="navItem">Attendants</Nav.Link>
                        <Nav.Link href="/account" className="navItem">My Account</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>


    )
}
"use client"
import React, { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfirmLogoutModel } from "../components/ConfirmLogoutModel";
import Link from "next/link";

export default function AdminSideBar() {

    const [showLogoutModal, setShowLogoutModal] = useState(false)

    return (
        <>
            <Navbar.Offcanvas className="col-md-2 bg-dark text-white" responsive="lg">
                <Offcanvas.Body>
                    <Nav className="flex-column justify-content-start container-fluid pt-3 pe-0">
                        <Link href="/admin" className="navItem">Dashboard</Link>
                        <Link href="/admin/lessonlist" className="navItem">Lesson List</Link>
                        <Link href="/admin/attendants" className="navItem">Attendants</Link>
                        <Nav.Link onClick={() => { setShowLogoutModal(true) }} >Logout</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            {
                showLogoutModal &&
                <ConfirmLogoutModel
                    isShown={showLogoutModal}
                    onHide={() => { setShowLogoutModal(false) }}
                />
            }
        </>
    )
}
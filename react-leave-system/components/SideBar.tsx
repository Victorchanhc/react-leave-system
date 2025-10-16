"use client"
import React, { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfirmLogoutModel } from "./ConfirmLogoutModel";
import Link from "next/link";

export default function SideBar() {

    const [showLogoutModal, setShowLogoutModal] = useState(false)

    return (
        <>
            <Navbar.Offcanvas className="col-md-2 bg-dark text-white" responsive="lg">
                <Offcanvas.Body>
                    <Nav className="flex-column justify-content-start container-fluid pt-3 pe-0">
                        <Link href="/" className="navItem">Home</Link>
                        <Link href="/lesson" className="navItem">Lesson</Link>
                        <Link href="/account" className="navItem">My Account</Link>
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
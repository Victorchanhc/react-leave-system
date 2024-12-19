"use client"
import React, { useState } from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfirmLogoutModel } from "./ConfirmLogoutModel";



export default function SideBar() {

    const [show, setShow] = useState(false)

    return (
        <>
            <Navbar.Offcanvas className="col-md-2 bg-dark text-white" responsive="lg">
                <Offcanvas.Body>
                    <Nav className="flex-column justify-content-start container-fluid pt-3 pe-0">
                        <Nav.Link href="/" className="navItem">Home</Nav.Link>
                        <Nav.Link href="/lesson" className="navItem">Lesson</Nav.Link>
                        <Nav.Link href="/account" className="navItem">My Account</Nav.Link>
                        <Nav.Link onClick={()=>{setShow(true)}} >Logout</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            {
                show && 
                <ConfirmLogoutModel
                isShow={show}
                onHide={()=>{setShow(false)}}
                />
            }

        </>
        


    )
}
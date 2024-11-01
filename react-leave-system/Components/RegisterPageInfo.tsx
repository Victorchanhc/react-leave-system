"use client"

import { Button, FloatingLabel, Form } from "react-bootstrap";
import Image from "next/image"



export function RegisterPageInput(){
    return(
        <div className="loginBGContainer d-flex justify-content-center align-items-center">
            <div className="loginContainer px-3 py-4 mt-4">
                <div className="bandLogo-content container-fluid py-4 d-flex justify-content-center">
                {/* <Image src={clientLogo} width={150} height={160} alt="client-logo"/> */}
                </div>
                <Form>
                    <FloatingLabel label='Username' controlId='usernameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' placeholder='Peter Chan' required />
                    </FloatingLabel>
                    <FloatingLabel label='Mobile Number' controlId='mobileInput' className='mb-3 mx-4'>
                        <Form.Control type='text' placeholder='XXXX-XXXX' required />
                    </FloatingLabel>
                    <FloatingLabel label='Email' controlId='emailInput' className='mb-3 mx-4'>
                        <Form.Control type='text' placeholder='example@email.com' required />
                    </FloatingLabel>
                    <FloatingLabel label='Password' controlId='registerPasswordInput' className='mb-3 mx-4'>
                        <Form.Control type='password' placeholder='password' required />
                    </FloatingLabel>
                    <FloatingLabel label='Confirm Password' controlId='registerConfirmPasswordInput' className='mb-3 mx-4'>
                        <Form.Control type='password' placeholder='password' required />
                    </FloatingLabel>
                    <Form.Group className="px-4 mb-3">
                        <Button className="btn-dark container-fluid" type="submit">Register</Button>
                    </Form.Group>
                </Form>
                
                <div className="register-content container-fluid px-4 mt-3">
                    You have an account ? Please Login !
                    <a href="/login" className="btn btn-outline-light btn-sm container-fluid my-2">

                        Login
                    </a>

                </div>
            </div>
        </div>
    )
}
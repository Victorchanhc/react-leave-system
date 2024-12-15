"use client"

import { Alert, Button, FloatingLabel, Form, FormGroup } from "react-bootstrap";
import googleLogo from "../pic/google.png"
import clientLogo from "../pic/LOGO.png"
import Image from "next/image"
import { FormEvent, useState } from "react";
import { login } from "./fetch/auth";
import { useRouter } from "next/navigation";

export function LoginPageInfo() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const router = useRouter()

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const res = await login(email, password)

        console.log(res)
        if (res === "PARENT") {
            router.push('/')
        }else if (res === "ADMIN"){
            router.push('/admin')
        }
        setShow(true)
        router.refresh()
    }
    return (
        <>
            {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Please put in correct Email and Password !
                </p>
            </Alert>}
            <div className="loginBGContainer d-flex justify-content-center align-items-center">
                <div className="loginContainer px-3 py-4 mt-4">
                    <div className="bandLogo-content container-fluid py-4 d-flex justify-content-center">
                        <Image src={clientLogo} width={150} height={160} alt="client-logo" />
                    </div>
                    <Form onSubmit={onSubmit}>
                        <FloatingLabel label='Email Address' controlId='loginEmailInput' className='mb-3 mx-4'>
                            <Form.Control type='text' placeholder='example@email.com' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        </FloatingLabel>
                        <FloatingLabel label='Password' controlId='loginPasswordInput' className='mb-3 mx-4'>
                            <Form.Control type='password' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        </FloatingLabel>
                        <Form.Group className="px-4 mb-3">
                            <Button className="container-fluid" type="submit">Login</Button>
                        </Form.Group>
                    </Form>
                    <div className="px-4">
                        <a href="/connect/google" className="btn btn-secondary container-fluid mb-3">
                            <Image src={googleLogo} width={20} height={20} alt="google-logo" className="me-2" />
                            Sign in With Google
                        </a>
                    </div>
                    <div className="forget-content container-fluid px-4 ">
                        <button type="button" className="col btn active container-fluid" data-bs-toggle="button" aria-pressed="true">
                            Forget password</button>
                    </div>
                    <div className="register-content container-fluid px-4 mt-3">
                        Don't have an account ? Register now !
                        <a href="/register" className="btn btn-outline-light btn-sm container-fluid my-2">

                            Register
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}
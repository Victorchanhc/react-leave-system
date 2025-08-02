"use client"

import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import googleLogo from "../pic/google.png"
import clientLogo from "../pic/LOGO.png"
import Image from "next/image"
import { FormEvent, useState } from "react";
import { login } from "./fetch/auth";
import { useRouter } from "next/navigation";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

export function LoginPageInfo() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showError, setShowError] = useState(false);
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const res = await login(email, password)

        if (res.status !== 200) { // error case
            setShowError(true)
            router.refresh()
            return
        }
        // success cases
        const data = await res.json()
        if (data.role === "PARENT") {
            router.push('/')
        } else if (data.role === "ADMIN") {
            router.push('/admin')
        }
    }
    return (
        <>
            {showError && <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Please check your Email and Password !
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
                            <Form.Control type={showPassword ? 'text' : 'password'} placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                            <button
                                onClick={togglePassword}
                                style={{
                                    position: 'absolute',
                                    right: '15px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1px',
                                    color: '#333',
                                }}
                            >
                                {showPassword ? <IconEye /> : <IconEyeClosed />}
                            </button>

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
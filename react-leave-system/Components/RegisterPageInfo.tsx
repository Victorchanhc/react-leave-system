"use client"

import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import Image from "next/image"
import { useForm } from "react-hook-form";
import { createUser } from "./fetch/user";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormState {
    username: string,
    phone: string,
    email: string,
    password: string,
    confirmPassword: string
}

export function RegisterPageInput() {

    const router = useRouter()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormState>()

    const password = watch("password")

    async function submit(data: FormState) {
        console.log(data)
        await createUser(data)
        console.log("complete")
        router.push("/")

    }

    return (
        <div className="loginBGContainer d-flex justify-content-center align-items-center">
            <div className="loginContainer px-3 py-4 mt-4">
                <div className="bandLogo-content container-fluid py-4 d-flex justify-content-center">
                    {/* <Image src={clientLogo} width={150} height={160} alt="client-logo"/> */}
                </div>
                <Form onSubmit={handleSubmit(submit)}>
                    <FloatingLabel label='Username' controlId='usernameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' {...register('username')} placeholder='Peter Chan' required />
                    </FloatingLabel>
                    <FloatingLabel label='Mobile Number' controlId='mobileInput' className='mb-3 mx-4'>
                        <Form.Control type='text' {...register("phone")} placeholder='XXXX-XXXX' required />
                    </FloatingLabel>
                    <FloatingLabel label='Email' controlId='emailInput' className='mb-3 mx-4'>
                        <Form.Control type='text' {...register("email")} placeholder='example@email.com' required />
                    </FloatingLabel>
                    <FloatingLabel label='Password' controlId='registerPasswordInput' className='mb-3 mx-4'>
                        <Form.Control type='password' {...register("password")} placeholder='password' required />
                    </FloatingLabel>
                    <FloatingLabel label='Confirm Password' controlId='registerConfirmPasswordInput' className='mb-3 mx-4'>
                        <Form.Control type='password' {...register("confirmPassword", {
                            validate: (value) => {
                                return value === password || "Password is not match "
                            }
                        })} placeholder='password' required />
                    </FloatingLabel>
                    {errors.confirmPassword &&
                        <Form.Group className="px-4 mb-3">
                            <Alert variant="danger">{errors.confirmPassword.message}</Alert>
                        </Form.Group>}
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
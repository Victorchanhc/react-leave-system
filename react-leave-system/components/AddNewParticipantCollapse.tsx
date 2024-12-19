'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useForm } from 'react-hook-form';
import { createStudent } from './fetch/student';

interface userIdProps {
    user_id : number
}

interface FormState {
    user_id: number,
    english_name: string,
    nick_name: string,
    chinese_name?: string,
    date_of_birth: string,
    gender: string
}

export function AddNewParticipantCollapse(props:userIdProps) {

    const router = useRouter()

    const [open, setOpen] = useState(false);

    const { register, handleSubmit, formState: { errors },reset } = useForm<FormState>()

    async function submit(data: FormState) {
        await createStudent(data)
        setOpen(!open)
        reset()
        router.refresh()

    }
    return (
        <>
            <Button
                variant='white'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='container-fluid my-2'
            >
                + Add New Participant
            </Button>
            <Collapse in={open}>
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Control {...register("user_id")} value={props.user_id} hidden/>
                    <FloatingLabel label='English Full Name' controlId='EnglishNameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' {...register("english_name")} placeholder='e.g. Chan Tai Man' required />
                    </FloatingLabel>
                    <FloatingLabel label='Nick Name' controlId='NickNameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' {...register("nick_name")} placeholder='e.g. Man Man/Marcus' required />
                    </FloatingLabel>
                    <FloatingLabel label='Chinese Full Name' controlId='ChineseNameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' {...register("chinese_name")} placeholder='e.g. 陳大文' />
                    </FloatingLabel>
                    <FloatingLabel label='Date Of Birth' controlId='DateOfBirthInput' className='mb-3 mx-4'>
                        <Form.Control type='date' {...register("date_of_birth")} placeholder='e.g. 陳大文' datatype='date' required />
                    </FloatingLabel>
                    <FloatingLabel label='Gender' controlId='GenderInput' className='mb-3 mx-4'>
                        <Form.Select aria-label='Select...' {...register("gender")} required>
                            <option disabled>Open this select menu</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </FloatingLabel>
                    <Form.Group className='mb-4 mx-4'>
                        <Button type='submit' className='container-fluid'> Submit</Button>
                    </Form.Group>
                </Form>
            </Collapse>
        </>
    );
}

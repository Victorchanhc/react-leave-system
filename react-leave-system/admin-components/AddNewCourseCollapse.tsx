'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useForm } from 'react-hook-form';
import { createCourse } from '../components/fetch/course';

interface FormState {
    
    name: string,
    description: string
    
}

export function AddNewLessonCollapse() {
    const [open, setOpen] = useState(false);

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormState>()

    async function submit(data: FormState) {
        console.log(data)
        await createCourse(data)
        router.refresh()
        reset()
        setOpen(!open)

    }

    return (
        <>
            <div className='mx-4 mb-3'>
                <Button
                    variant='outline-dark'
                    onClick={() => setOpen(!open)}
                    aria-controls="addNewLessonCollapse"
                    aria-expanded={open}
                    className='container-fluid my-2'
                >
                    + Add New Crouse
                </Button>
            </div>
            <div className='mb-5'>
                <Collapse in={open}>
                    <Form onSubmit={handleSubmit(submit)}>
                        <FloatingLabel label='Course Name' controlId='lessonNameInput' className='mb-3 mx-4'>
                            <Form.Control type='text' {...register('name')} placeholder='e.g. 星期六 下午 葵涌' required />
                        </FloatingLabel>
                        <FloatingLabel label='description' controlId='lessonVenueInput' className='mb-3 mx-4'>
                            <Form.Control as="textarea" {...register("description")} placeholder='e.g. 坑坪街遊樂場'/>
                        </FloatingLabel>
                        <Form.Group className='mb-4 mx-4'>
                            <Button variant="dark" type='submit' className='container-fluid'> Submit</Button>
                        </Form.Group>
                    </Form>
                </Collapse>
            </div>
        </>
    );
}

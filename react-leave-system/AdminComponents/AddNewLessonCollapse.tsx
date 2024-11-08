'use client'

import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export function AddNewLessonCollapse() {
    const [open, setOpen] = useState(false);

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
                    + Add New Lesson
                </Button>
            </div>
            <div className='mb-5'>
                <Collapse in={open}>
                    <Form>
                        <FloatingLabel label='Lesson Name' controlId='lessonNameInput' className='mb-3 mx-4'>
                            <Form.Control type='text' placeholder='e.g. 星期六 下午 葵涌' required />
                        </FloatingLabel>
                        <FloatingLabel label='Date of lesson' controlId='lessonDateInput' className='mb-3 mx-4'>
                            <Form.Control type='date' placeholder='2024-10-23' required />
                        </FloatingLabel>
                        <FloatingLabel label='Start Time' controlId='lessonStartTimeInput' className='mb-3 mx-4'>
                            <Form.Control type='time' placeholder='08:00' required />
                        </FloatingLabel>
                        <FloatingLabel label='End Time' controlId='lessonEndTimeInput' className='mb-3 mx-4'>
                            <Form.Control type='time' placeholder='10:00' required />
                        </FloatingLabel>
                        <FloatingLabel label='Venue' controlId='lessonVenueInput' className='mb-3 mx-4'>
                            <Form.Control type='text' placeholder='e.g. 坑坪街遊樂場' required />
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

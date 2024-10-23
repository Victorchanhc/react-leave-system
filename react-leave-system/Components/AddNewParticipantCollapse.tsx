'use client'

import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export function AddNewParticipantCollapse() {
    const [open, setOpen] = useState(false);

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
                <Form>
                    <FloatingLabel label='English Full Name' controlId='EnglishNameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' placeholder='e.g. Chan Tai Man' required />
                    </FloatingLabel>
                    <FloatingLabel label='Judy' controlId='NickNameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' placeholder='e.g. Man Man/Marcus' required />
                    </FloatingLabel>
                    <FloatingLabel label='陳晞妍' controlId='ChineseNameInput' className='mb-3 mx-4'>
                        <Form.Control type='text' placeholder='e.g. 陳晞妍' required />
                    </FloatingLabel>
                    <FloatingLabel label='Date Of Birth' controlId='DateOfBirthInput' className='mb-3 mx-4'>
                        <Form.Control type='date' placeholder='e.g. 陳大文' datatype='date' required />
                    </FloatingLabel>
                    <FloatingLabel label='Gender' controlId='GenderInput' className='mb-3 mx-4'>
                        <Form.Select aria-label='Select...' required>
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

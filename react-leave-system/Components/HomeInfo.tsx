'use client'

import { Button, Collapse, FloatingLabel, Form } from "react-bootstrap";
import { Lesson } from "./Lesson";
import { useState } from "react";



export function HomeInfo() {

    const [open, setOpen] = useState(false);

    const lesson =
    {
        id: 1,
        name: "星期日 上午 荃灣",
        date: ["5/12", "13/12", "20/12"],
        startTime: "11:30",
        endTime: "13:00",
        venue: "城門谷五人場"
    }

    const participant = {
        name: 'Jacko'
    }

    return (
        <div className="participantContent m-4">
            <h2>{participant.name}</h2>
            <div className="participantLessonContainer border rounded">
                <div className="participantLessonInfoContent p-3 d-flex justify-content-between align-items-center" >
                    <div className="lessonInfoContent">
                        <Lesson lesson={lesson} />
                    </div>
                    <Button
                        variant="outline-dark"
                        onClick={() => { setOpen(!open); }}
                        aria-controls="apply-leave-collapse"
                        aria-expanded={open}
                    >
                        Apply Leave
                    </Button>
                </div>
                <div>
                    <Collapse in={open}>
                        <Form>
                            <FloatingLabel label='Original Training Date' controlId="OriginalTrainingDateInput" className="mb-3 mx-4">
                                <Form.Select aria-label="Select..." required>
                                    <option disabled>Select one...</option>
                                    <option value={'7/1'}>7/1</option>
                                    <option value={'14/1'}>14/1</option>
                                </Form.Select>
                            </FloatingLabel>
                            <FloatingLabel label='Request Training Date' controlId="RequestTrainingDateInput" className="mb-3 mx-4">
                                <Form.Select aria-label="Select..." required>
                                    <option disabled>Select one...</option>
                                    <option value={'7/1'}>21/1</option>
                                    <option value={'14/1'}>28/1</option>
                                </Form.Select>
                            </FloatingLabel>
                            <FloatingLabel label='Reason' controlId="ReasonTrainingDateInput" className="mb-3 mx-4">
                                <Form.Select aria-label="Select..." required>
                                    <option disabled>Select one...</option>
                                    <option value={'病假'}>病假</option>
                                    <option value={'事假'}>事假</option>
                                </Form.Select>
                            </FloatingLabel>
                            <Form.Group className='mb-4 mx-4'>
                                <Button type='submit' className='container-fluid'> Submit</Button>
                            </Form.Group>
                        </Form>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}
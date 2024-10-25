'use client'

import { useState } from "react"
import { FloatingLabel, Form, FormSelect } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from 'react-bootstrap/Collapse'


export function ApplyLeaveCollapse() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="outline-dark"
                onClick={() => { setOpen(!open); }}
                aria-controls="apply-leave-collapse"
                aria-expanded={open}
            >
                Apply Leave
            </Button><Collapse in={open}>
                <Form>
                    <FloatingLabel label='Original Training Date' controlId="OriginalTrainingDateInput" className="mb-3 mx-4">
                        <Form.Select aria-label="Select..." required>
                            <option disabled>Select one...</option>
                            <option value={'7/1'}>7/1</option>
                            <option value={'14/1'}>14/1</option>
                        </Form.Select>
                    </FloatingLabel><FloatingLabel label='Original Training Date' controlId="OriginalTrainingDateInput" className="mb-3 mx-4">
                        <Form.Select aria-label="Select..." required>
                            <option disabled>Select one...</option>
                            <option value={'7/1'}>7/1</option>
                            <option value={'14/1'}>14/1</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form>
            </Collapse>
        </>

    )
}
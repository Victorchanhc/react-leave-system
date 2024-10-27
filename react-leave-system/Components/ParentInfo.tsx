"use client"
import { IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import { Button, Card, Form, FormControl, FormGroup, InputGroup } from "react-bootstrap";


export function ParentInfo() {

    const [edit, setEdit] = useState(true)

    return (
        <>
            <Card >
                <div className="d-flex justify-content-between p-3">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Parent Name</Form.Label>
                            <Form.Control type="text" defaultValue={`Victor`} disabled={edit} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parent Email</Form.Label>
                            <Form.Control type="text" defaultValue={`abc@gmail.com`} disabled={edit} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parent Contact Number</Form.Label>
                            <Form.Control type="text" defaultValue={`64800144`} disabled={edit} />
                        </Form.Group>
                        {
                            !edit && <Button onClick={() => { setEdit(!edit) }} type="submit">Submit</Button>
                        }
                    </Form>
                    <div className="mt-2 me-2">
                        <IconEdit type="button" onClick={() => { setEdit(!edit) }}></IconEdit>
                    </div>
                </div>
            </Card>
        </>
    )
}
"use client"

import { IconEdit } from "@tabler/icons-react"
import { useState } from "react"
import { Button, Card, Form } from "react-bootstrap"


export function ParticipantInfo(){

    const [edit, setEdit] = useState(true)

    return(
        <>
            <Card >
                <div className="d-flex justify-content-between p-3">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={`Jacko Wan`} disabled={edit} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nick Name</Form.Label>
                            <Form.Control type="text" defaultValue={`Jacko`} disabled={edit} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Chinese Name</Form.Label>
                            <Form.Control type="text" defaultValue={`發電`} disabled={edit} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="text" defaultValue={`2018-06-05`} disabled={edit} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" defaultValue={`Male`} disabled={edit} />
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
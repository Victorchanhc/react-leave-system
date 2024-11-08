"use client"

import { useState } from "react"
import { Accordion, Button, Card, Collapse, FloatingLabel, Form, FormCheck, FormControl, Table } from "react-bootstrap"
import { AdminLesson } from "./AdminLesson"

interface AttendantLessonProps {
    attendantData: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string,
        participantName: string,
        participantNickName: string,
        participantStatus: boolean
    }
}


export function AttendantLessonCollapse(props: AttendantLessonProps) {

    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(true)

    return (
        <>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div>
                        <h5>{props.attendantData.name}</h5>
                        <div>{props.attendantData.venue}</div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <Accordion>
                        <Accordion.Item eventKey="0-1">
                            <Accordion.Header>
                                <div className="d-flex">
                                    <div>{props.attendantData.date}</div>
                                    <div>{props.attendantData.startTime}-{props.attendantData.endTime}</div>
                                    <div>3</div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <Form>
                                        <Form.Check
                                            type="checkbox"
                                            label={props.attendantData.participantName} />
                                    </Form>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
            {/* <div>
                <Collapse in={open}>
                    <div>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Start time</th>
                                    <th>End time</th>
                                    <th>Venue</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><FormControl type="date" defaultValue={props.lesson.date} disabled={edit} /></td>
                                    <td><FormControl type="time" defaultValue={props.lesson.startTime} disabled={edit} /></td>
                                    <td><FormControl type="time" defaultValue={props.lesson.endTime} disabled={edit} /></td>
                                    <td><FormControl style={{ minWidth: 150 + 'px' }} type="text" defaultValue={props.lesson.venue} disabled={edit} /></td>
                                    {
                                        edit && <td><div className="align-self-center"><Button onClick={() => setEdit(!edit)}>Edit</Button></div></td>
                                    }
                                    {
                                        !edit && <td><Button type="submit" className="align-self-center" onClick={() => setEdit(!edit)}>Save</Button></td>
                                    }
                                    <td className=""><Button variant="danger">Delete</Button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Collapse>
            </div> */}
        </>
    )
}
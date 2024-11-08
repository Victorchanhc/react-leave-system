"use client"

import { useState } from "react"
import { Button, Collapse, FloatingLabel, Form, FormControl, Table } from "react-bootstrap"
import { AdminLesson } from "./AdminLesson"

interface AdminLessonProps {
    lesson: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string
    }
}

export function EditLessonCollapse(props: AdminLessonProps) {

    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(true)

    return (
        <>
            <div className="d-flex">
                <AdminLesson lesson={props.lesson} />
                <div className='d-flex align-items-center mx-3 mb-3'>
                    <Button
                        variant='outline-dark'
                        onClick={() => { setOpen(!open)}}
                        aria-controls="EditLessonCollapse"
                        aria-expanded={open}
                        className='my-2'
                        size="sm"
                    >
                        Edit
                    </Button>
                </div>
            </div>
            <div>
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
                                    <td><FormControl type="date" defaultValue={props.lesson.date} disabled={edit}/></td>
                                    <td><FormControl type="time" defaultValue={props.lesson.startTime} disabled={edit}/></td>
                                    <td><FormControl type="time" defaultValue={props.lesson.endTime} disabled={edit}/></td>
                                    <td><FormControl style={{minWidth:150+'px'}} type="text" defaultValue={props.lesson.venue} disabled={edit}/></td>
                                    {
                                        edit && <td><div className="align-self-center"><Button onClick={()=>setEdit(!edit)}>Edit</Button></div></td>
                                    }
                                    {
                                        !edit && <td><Button type="submit" className="align-self-center" onClick={()=>setEdit(!edit)}>Save</Button></td>
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
            </div>
        </>
    )
}
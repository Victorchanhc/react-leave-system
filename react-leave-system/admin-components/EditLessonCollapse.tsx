"use client"

import { useState } from "react"
import { Button, Col, Collapse, Form, FormGroup, Row } from "react-bootstrap"
import { AdminLesson } from "./AdminLesson"
import { Course } from "../services/models"
import { EditLesson } from "./EditLesson"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { createLesson } from "../components/fetch/lesson"

interface AdminLessonProps {
    course: Course
}

interface FormState {
    course_id: number,
    lesson_date: string,
    start_time: string,
    end_time: string,
    venue: string
}

export function EditLessonCollapse(props: AdminLessonProps) {

    const [open, setOpen] = useState(false)

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormState>({
        defaultValues: {
            course_id: props.course.course_id,
            lesson_date: "",
            start_time: props.course.lessons[0]?.start_time,
            end_time: props.course.lessons[0]?.end_time,
            venue: props.course.lessons[0]?.venue
        }})

    async function submit(data: FormState) {
        console.log(data)
        await createLesson(data)
        router.refresh()
        reset()

    }

    return (
        <>
            <div className="d-flex">
                <AdminLesson lesson={props.course.lessons[0]} course_name = {props.course.course_name}/>
                <div className='d-flex align-items-center mx-3 mb-3'>
                    <Button
                        variant='outline-dark'
                        onClick={() => { setOpen(!open) }}
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
                        {props.course.lessons.length === 0 && <div></div> }
                        {props.course.lessons.map((lesson, lessonIdx) => (
                            <div key={lessonIdx}>

                                <EditLesson lesson={lesson}/>
                            </div>

                        ))}
                        <hr></hr>
                        <div className="ms-3"> Add New Lesson</div>
                    <Form onSubmit={handleSubmit(submit)} className=" py-2">
                        <FormGroup>
                            <Form.Control type="text" {...register("course_id")} defaultValue={props.course.course_id} hidden />
                            <Row className="ps-1">
                                <Col md="auto" className="my-1">
                                    <Form.Control type="date" {...register("lesson_date")}  required />
                                </Col>
                                <Col md="auto" className="my-1">
                                    <Form.Control type="time" {...register("start_time")} defaultValue={props.course.lessons[0]?.start_time}  required />
                                </Col>
                                <Col md="auto" className="my-1">
                                    <Form.Control type="time" {...register("end_time")} defaultValue={props.course.lessons[0]?.end_time} required />
                                </Col>
                                <Col md="auto" className="my-1">
                                    <Form.Control type="text" {...register("venue")} defaultValue={props.course.lessons[0]?.venue} required />
                                </Col>
                                <Col md="auto" className="my-1 d-flex justify-content-between">
                                    <Button type="submit" className="align-self-center">Save</Button>
                                </Col>

                            </Row>
                        </FormGroup>

                    </Form >

                    </div>
                </Collapse>
            </div>
        </>
    )
}
"use client"

import { useState } from "react"
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap"
import { lesson } from "../services/models"
import { deleteLesson, updateLesson } from "../components/fetch/lesson"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { DeleteConfirmationModel } from "../components/DeleteConfirmationModel"

interface AdminLessonProps {
    lesson: lesson
}

interface FormState {
    lesson_id: number,
    lesson_date: string,
    start_time: string,
    end_time: string,
    venue: string
}

export function EditLesson(props: AdminLessonProps) {

    const router = useRouter()

    const lesson = props.lesson

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormState>({
        defaultValues: {
            lesson_id: lesson.lesson_id,
            lesson_date: lesson.lesson_date,
            start_time: lesson.start_time,
            end_time: lesson.end_time,
            venue: lesson.venue,
        }
    })

    const [edit, setEdit] = useState(true)
    const [show, setShow] = useState(false)

    async function submit(data: FormState) {
        console.log(data)
        await updateLesson(data)
        router.refresh()
        setEdit(!edit)
    }

    async function onDelete(data) {

        console.log(data)
        await deleteLesson(data)
        router.refresh()
        reset()

    }

    return (
        <>
            <Form onSubmit={handleSubmit(submit)} className=" py-2">
                <FormGroup>
                    <Form.Control type="text" {...register("lesson_id")} defaultValue={lesson.lesson_id} hidden />
                    <Row className="ps-1">
                        <Col md="auto" className="my-1">
                            <Form.Control type="date" {...register("lesson_date")} defaultValue={lesson.lesson_date} disabled={edit} required />
                        </Col>
                        <Col md="auto" className="my-1">
                            <Form.Control type="time" {...register("start_time")} defaultValue={lesson.start_time} disabled={edit} required />
                        </Col>
                        <Col md="auto" className="my-1">
                            <Form.Control type="time" {...register("end_time")} defaultValue={lesson.end_time} disabled={edit} required />
                        </Col>
                        <Col md="auto" className="my-1">
                            <Form.Control type="text" {...register("venue")} defaultValue={lesson.venue} disabled={edit} required />
                        </Col>
                        <Col md="auto" className="my-1 d-flex justify-content-between">
                            {
                                edit && <Button style={{ minWidth: 70 }} onClick={() => setEdit(!edit)}>Edit</Button>
                            }
                            {
                                !edit && <Button type="submit" className="align-self-center">Save</Button>
                            }
                            <Button className="ms-5" variant="outline-danger" onClick={()=>{setShow(true)}}>Delete</Button>
                        </Col>

                    </Row>
                </FormGroup>

            </Form >
            {
                show && 
                <DeleteConfirmationModel
                isShow={show}
                lesson={lesson}
                onHide={()=>{setShow(false)}}
                onDelete={()=>{
                    setShow(false)
                    onDelete(lesson.lesson_id)
                }}
                />
            }

        </>
    )
}
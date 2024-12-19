"use client"

import { useRouter } from "next/navigation"
import { Alert, Button, Card, Form } from "react-bootstrap"
import { AllDetails, Course } from "../services/models"
import { useForm } from "react-hook-form"
import { createEnrollment } from "./fetch/enrollment"

interface DetailsProps {
    course: Course,
    allDetails?: AllDetails[]
}

interface FormState {
    student_id: number,
    course_id : number
}

export function JoinLesson(props: DetailsProps) {

    const router = useRouter()
    const course = props.course
    const detail = props.allDetails[0].students

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormState>()

    async function submit(data: FormState) {
        await createEnrollment(data)
        reset()
        router.push("/")

    }
    
    return (
        <>
            <div className="d-flex border justify-content-between rounded mx-3 mb-2 p-3 bg-light">
                <Card.Body>
                    <Card.Title className="mb-3">{course.course_name}</Card.Title>
                    <Card.Text>Next Lesson :</Card.Text>

                    <Card.Text>Date : {course.lessons[0].lesson_date}</Card.Text>

                    <Card.Text>Time : {(course.lessons[0].start_time) + " - " + (course.lessons[0].end_time)}</Card.Text>
                    <Card.Text>Venue : {course.lessons[0].venue}</Card.Text>
                </Card.Body>
                <Button variant="outline-dark" size="sm" className="align-self-center" href="/lesson">Change</Button>
            </div>
            <div className=" border justify-content-between rounded mx-3 mb-2 p-3 bg-light">
                <Form onSubmit={handleSubmit(submit)} className="container-fluid">
                    {detail.map((student, studentIdx) => (
                        <Form.Group key={studentIdx}>
                            <Form.Check className="py-4" type="checkbox" >
                                <Form.Check.Input type="radio" {...register("student_id", {required : true})} defaultValue={student.id}/>
                                <Form.Check.Label className="container-fluid">{student.nick_name}</Form.Check.Label>
                            </Form.Check>
                        </Form.Group>
                    ))}
                    {errors.student_id && <Alert variant="danger">Please select one </Alert>}
                    <Form.Control {...register("course_id")} defaultValue={course.course_id} hidden />
                    <Form.Group className="px-4 mb-3">
                        <Button className="container-fluid" type="submit">Join</Button>
                    </Form.Group>
                </Form>
            </div>
        </>

    )
}
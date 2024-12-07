"use client"

import { useRouter } from "next/navigation"
import { Button, Card, Form } from "react-bootstrap"
import { AllDetails, Courses, lesson } from "../services/models"

interface DetailsProps {
    course: Courses,
    allDetails?: AllDetails[]
}

export function JoinLesson(props: DetailsProps) {

    const router = useRouter()

    console.log(props.allDetails)
    const course = props.course
    const detail = props.allDetails[0].students

    // const joinLesson = (id: number)=>{
    //     router.push("/lesson/join")
    // }

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
                <Form className="container-fluid">
                    {detail.map((student, studentIdx) => (
                        <Form.Group key={studentIdx}>
                            <Form.Check className="py-4" type="checkbox" >
                                <Form.Check.Input type="checkbox" defaultValue={student.id}/>
                                <Form.Check.Label className="container-fluid">{student.nick_name}</Form.Check.Label>
                            </Form.Check>
                            <Form.Control defaultValue={course.course_id} hidden />
                        </Form.Group>
                    ))}
                    <Form.Group className="px-4 mb-3">
                        <Button className="container-fluid" type="submit">Join</Button>
                    </Form.Group>
                </Form>
            </div>
        </>

    )
}
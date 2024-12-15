"use client"

import { Accordion, Col, Row } from "react-bootstrap"
import { IconCalendarEvent, IconClockHour3, IconUserFilled } from "@tabler/icons-react"
import { Courses } from "../services/models"
import { useRouter } from "next/navigation"
import { AttendanceForm } from "./AttendanceForm"

interface AttendantLessonProps {
    courseList: Courses
}

export function AttendantLessonAccordion(props: AttendantLessonProps) {

    const router = useRouter()

    return (
        <>
            <Accordion.Item eventKey={`${props.courseList.course_id}`}>
                <Accordion.Header>
                    <div>
                        <h5>{props.courseList.course_name}</h5>
                        <div>{props.courseList.lessons[0]?.venue}</div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <Accordion>
                        {props.courseList.lessons.map((lesson, lessonIdx) => (
                            <Accordion.Item eventKey={`${lessonIdx}`} key={lessonIdx}>
                                <Accordion.Header>
                                    <Row className="container-fluid d-flex justify-content-between align-items-center">
                                        <Col className="d-flex align-items-center"><IconCalendarEvent /> {lesson.lesson_date}</Col>
                                        <Col className="d-flex align-items-center"><IconClockHour3 /> {lesson.start_time.slice(0, 5)}-{lesson.end_time.slice(0, 5)}</Col>
                                    </Row>
                                    <div className="d-flex align-items-center"><IconUserFilled /> {lesson.attendance.length}</div>

                                </Accordion.Header>
                                <Accordion.Body>
                                    {lesson.attendance.length === 0 ?
                                        <div>No match record</div>
                                        :
                                        <>
                                            <AttendanceForm attendanceStudent={lesson.attendance} />
                                        </>
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}
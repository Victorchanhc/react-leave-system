'use client'
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { Course } from "../services/models";

interface LessonListProps {
    courses : Course[]
}


export function LessonList(props: LessonListProps) {

    // What is there is 0 lesson for this course

    // There must be a checking for length > 0
    // if(course.lessons.length > 0){
    //     course.lessons[0]
    // }

    return (
        <div>
            <div className="participantContainer">
                <div className="lessonContent">
                    <Row className="d-inline-flex justify-content-between container-fluid px-5 ">
                        {props.courses.map((course, idx) => (
                            <Col key={idx} md={4} className="mb-2">
                                <Card className="m-3 p-2">
                                    <Card.Body>
                                    <Card.Title>{course.course_name}</Card.Title>
                                    <Card.Subtitle>{course.lessons[0].venue}</Card.Subtitle>
                                    <Card.Text>{course.lessons[0].start_time} - {course.lessons[0].end_time}</Card.Text>
                                    <Card.Text>{course.description}</Card.Text>
                                        <Link className="btn btn-primary btn-sm mt-2" href={`/lesson/join/${course.course_id}`}>Join</Link>
                                    </Card.Body>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    )
}
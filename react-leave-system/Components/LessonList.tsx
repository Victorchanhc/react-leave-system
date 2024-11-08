'use client'
import { Button, Card, Col, Row } from "react-bootstrap";
import { Lesson } from "./Lesson";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface LessonListProps {
    lessons: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string
    }[]
}


export function LessonList(props: LessonListProps) {

    const router = useRouter()

    return (
        <div>
            <div className="participantContainer">
                <div className="lessonContent">
                    <Row className="d-inline-flex justify-content-between container-fluid px-5 ">
                        {props.lessons.map((lesson, idx) => (
                            <Col key={idx} md={4} className="mb-2">
                                <Card className="m-3 p-2">
                                    <Lesson lesson={lesson} />
                                    <Card.Body>
                                        <Link className="btn btn-primary btn-sm mt-2" href={`/lesson/join/${lesson.id}`}>Join</Link>
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
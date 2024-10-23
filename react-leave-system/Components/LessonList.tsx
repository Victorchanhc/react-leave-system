'use client'
import { Button, Col, Row } from "react-bootstrap";
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
            <h1 className="text-center mt-3 ">
                Welcome to STFC
            </h1>
            <div className="participantContainer">
                <div className="lessonContent">
                    <Row className="d-inline-flex justify-content-between px-5 ">
                        {props.lessons.map((lesson, idx) => (
                            <Col key={idx} md={3} className="border rounded m-4 p-3">
                                <Lesson lesson={lesson} />
                                
                                <Link className="btn btn-primary btn-sm mt-2" href={`/lesson/join/${lesson.id}`}>Join</Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    )
}
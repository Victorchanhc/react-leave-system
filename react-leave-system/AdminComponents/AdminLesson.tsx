"use client"

import { Card } from "react-bootstrap"

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

export function AdminLesson(props:AdminLessonProps) {

    return (

        <>
            <Card.Body>
                <Card.Title>{props.lesson.name}</Card.Title>
                <Card.Text>{props.lesson.date}</Card.Text>
                <Card.Text>{(props.lesson.startTime) + " - " + (props.lesson.endTime)}</Card.Text>
                <Card.Text>{props.lesson.venue}</Card.Text>
            </Card.Body>
        </>

    )
}
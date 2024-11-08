"use client"

import { useRouter } from "next/navigation"
import { Card } from "react-bootstrap"

interface LessonProps {
    lesson: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string
    }
}

export function Lesson(props: LessonProps) {

    const router = useRouter()

    // const joinLesson = (id: number)=>{
    //     router.push("/lesson/join")
    // }

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
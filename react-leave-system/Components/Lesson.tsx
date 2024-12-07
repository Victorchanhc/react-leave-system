"use client"

import { useRouter } from "next/navigation"
import { Card } from "react-bootstrap"
import { lesson } from "../services/models"

interface lessonProps {
    lessons: lesson
}

export function Lesson(props: lessonProps) {

    const router = useRouter()



    // const joinLesson = (id: number)=>{
    //     router.push("/lesson/join")
    // }

    return (
        <>
                <Card.Body>
                    {/* <Card.Title className="mb-3">{props.lesson.}</Card.Title> */}
                    <Card.Text>Date : {props.lessons.lesson_date}</Card.Text>
                    <Card.Text>Time : {(props.lessons.start_time) + " - " + (props.lessons.end_time)}</Card.Text>
                    <Card.Text>Venue : {props.lessons.venue}</Card.Text>
                </Card.Body>
        </>

    )
}
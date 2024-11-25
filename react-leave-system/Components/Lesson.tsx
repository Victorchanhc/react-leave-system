"use client"

import { useRouter } from "next/navigation"
import { Card } from "react-bootstrap"
import { HomePageDetail, Lessons, Players } from "../services/models"

interface LessonProps {
    lessons:Lessons
}

export function Lesson(props: LessonProps) {

    const router = useRouter()



    // const joinLesson = (id: number)=>{
    //     router.push("/lesson/join")
    // }

    return (
        <>
                <Card.Body>
                    <Card.Title className="mb-3">Next Lesson : </Card.Title>
                    <Card.Text className="font-weight-bold">{props.lessons.lesson_name}</Card.Text>
                    <Card.Text>Date : {props.lessons.date}</Card.Text>
                    <Card.Text>Time : {(props.lessons.start_time.substring(0,5)) + " - " + (props.lessons.end_time.substring(0,5))}</Card.Text>
                    <Card.Text>Venue : {props.lessons.venue}</Card.Text>
                </Card.Body>
        </>

    )
}
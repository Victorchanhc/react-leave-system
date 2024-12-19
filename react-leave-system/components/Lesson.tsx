"use client"

import { Card } from "react-bootstrap"
import { LessonInfo } from "../services/models"

interface lessonProps {
    lessons: LessonInfo
}

export function Lesson(props: lessonProps) {

    return (
        <>
                <Card.Body>
                    <Card.Title className="mb-3">{props.lessons.course_name}</Card.Title>
                    <Card.Text>Date : {props.lessons.lesson_date}</Card.Text>
                    <Card.Text>Time : {(props.lessons.start_time) + " - " + (props.lessons.end_time)}</Card.Text>
                    <Card.Text>Venue : {props.lessons.venue}</Card.Text>
                </Card.Body>
        </>

    )
}
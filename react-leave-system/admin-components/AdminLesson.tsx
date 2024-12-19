"use client"

import { Card } from "react-bootstrap"
import { LessonInfo } from "../services/models"
import  styles  from "../app/(main)/leave.module.scss"


interface AdminLessonProps {
    course_name : string
    lesson: LessonInfo
}

export function AdminLesson(props:AdminLessonProps) {

    return (

        <>
            <Card.Body>
                <Card.Title>{props.course_name}</Card.Title>
                {props.lesson?.course_name === undefined ? 
                <Card.Text className={styles.dangerText}>Click Edit to Add a first lesson </Card.Text>
                :
                <Card.Text>{(props.lesson?.start_time) + " - " + (props.lesson?.end_time)}</Card.Text>
                }
                <Card.Text>{props.lesson?.venue}</Card.Text>
            </Card.Body>
        </>

    )
}
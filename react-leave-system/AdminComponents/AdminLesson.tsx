"use client"

import { Card } from "react-bootstrap"
import { lesson } from "../services/models"
import { redirect } from "next/dist/server/api-utils"
import  styles  from "../app/(main)/leave.module.scss"


interface AdminLessonProps {
    course_name : string
    lesson: lesson
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
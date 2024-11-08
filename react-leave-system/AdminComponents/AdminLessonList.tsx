"use client"

import Link from "next/link";
import { Button, Card, Col, Collapse, FloatingLabel, Form, Row } from "react-bootstrap";
import { AdminLesson } from "./AdminLesson";
import { EditLessonCollapse } from "./EditLessonCollapse";
import { useState } from "react";

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

export function AdminLessonList(props: LessonListProps) {

    return (
        <div>
            <div className="participantContainer">
                <div className="lessonContent container-fluid">
                    {props.lessons.map((lesson, idx) => (
                        <Card key={idx} className="mx-2 p-2 mb-2">
                            {/* add the lesson to collapse for easily to control the edit button at the end of card */}
                            <EditLessonCollapse lesson={lesson}/>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
"use client"

import Link from "next/link";
import { Button, Card, Col, Collapse, FloatingLabel, Form, Row } from "react-bootstrap";
import { AdminLesson } from "./AdminLesson";
import { EditLessonCollapse } from "./EditLessonCollapse";
import { useState } from "react";
import { Courses } from "../services/models";
import { headers } from "next/headers";

interface coursesListProps {
    courses : Courses[]
}

export function AdminLessonList(props: coursesListProps) {

    return (
        <div>
            <div className="participantContainer">
                <div className="lessonContent container-fluid">
                    {props.courses.map((course, coursesIdx) => (
                        <Card key={coursesIdx} className="mx-2 p-2 mb-2">
                            {/* add the lesson to collapse for easily to control the edit button at the end of card */}
                            <EditLessonCollapse course={course}/>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
"use client"

import { Card } from "react-bootstrap";
import { EditLessonCollapse } from "./EditLessonCollapse";
import { Course } from "../services/models";

interface coursesListProps {
    courses : Course[]
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
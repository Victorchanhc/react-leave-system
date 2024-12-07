'use client'

import { Button, Collapse, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
import { AllDetails, courseDetail } from "../services/models";
import { Lesson } from "./Lesson";
import { IconUserFilled } from "@tabler/icons-react";

interface UserDetailsProps {
    allDetails: AllDetails[],
    courseDetails: courseDetail[]
}



export function HomeInfo(props: UserDetailsProps) {

    const [open, setOpen] = useState(null);
    const info = { ...props.allDetails[0] }

    const toggleCollapse = (id) => {
        setOpen(open === id ? null : id)
    }
    // const defaultLessonsByPlayer = info.players.map(player => {
    //     const defaultLessons = player.lessons.filter(lesson => lesson.status === 'DEFAULT');
    //     return { ...player, defaultLessons };
    // }).filter(player => player.defaultLessons.length > 0); 

    // const pendingLessonsByPlayer = info.players.map(player => {
    //     const pendingLessons = player.lessons.filter(lesson => lesson.status === 'PENDING');
    //     return { ...player, pendingLessons }; 
    // }).filter(player => player.pendingLessons.length > 0);

    // const alllesson = props.lessonDetails.map(alllesson => {
    //         const pendingLessons = alllesson.lessons.map
    //         return { ...alllesson, pendingLessons }; 
    //     })
    

    // console.log(props.courseDetails[0].lesson_date.toISOString().split("T")[0])

    return (
        <>
            {info.students.map((student, studentIdx) => (
                <div key={studentIdx} className="participantContent m-4">
                    <h2 ><IconUserFilled></IconUserFilled> {student.nick_name}</h2>
                    {student.courses.map((course, courseIdx) => (
                        <div key={courseIdx} className="participantLessonContainer border rounded">
                            <div className="participantLessonInfoContent p-3 d-flex justify-content-between align-items-center">
                                <div className="lessonInfoContent" >
                                    <h6 className="mb-3">Next Lesson :</h6>
                                    <h5 className="mb-3">{course.course_name}</h5>
                                    <Lesson lessons={course.lessons[0]} />
                                </div>
                                <Button
                                    variant="outline-dark"
                                    onClick={() => { toggleCollapse(student.id); }}
                                    aria-controls={student.english_name}
                                    aria-expanded={open === student.id}
                                >
                                    Apply Leave
                                </Button>
                            </div>
                            <div>
                                <Collapse in={open === student.id}>
                                    <Form>
                                        <FloatingLabel label='Original Training Date' controlId="OriginalTrainingDateInput" className="mb-3 mx-4">
                                            <Form.Select aria-label="Select..." required>
                                                <option disabled>Select one...</option>
                                                {course.lessons.map((lesson, lessonIdx) => (
                                                    <option key={lessonIdx} value={lesson.id}>{course.course_name} --- {lesson.venue} --- {lesson.lesson_date} --- {lesson.start_time.substring(0, 5)} - {lesson.end_time.substring(0, 5)}</option>
                                                ))}
                                            </Form.Select>
                                        </FloatingLabel>
                                        <FloatingLabel label='Request Training Date' controlId="RequestTrainingDateInput" className="mb-3 mx-4">
                                            <Form.Select aria-label="Select..." required>
                                                <option disabled>Select one...</option>
                                                {props.courseDetails.map((course, courseIdx) => (
                                                    <option key={courseIdx} value={course.id}>{course.name} --- {course.venue} --- {course.lesson_date.toISOString().split("T")[0]} --- {course.start_time.substring(0, 5)} - {course.end_time.substring(0, 5)}</option>
                                                
                                                ))}
                                                </Form.Select>
                                        </FloatingLabel>
                                        <FloatingLabel label='Reason' controlId="ReasonTrainingDateInput" className="mb-3 mx-4">
                                            <Form.Select aria-label="Select..." required>
                                                <option disabled>Select one...</option>
                                                <option value={'病假'}>病假</option>
                                                <option value={'事假'}>事假</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                        <Form.Group className='mb-4 mx-4'>
                                            <Button type='submit' className='container-fluid'> Submit</Button>
                                        </Form.Group>
                                    </Form>
                                </Collapse>
                            </div>
                        </div>
                    ))}
                    {student.courses.length === 0 &&
                    <div className="participantLessonContainer border rounded py-4">
                        <a href="/lesson" className="m-3"> Join Lesson Now ! </a>
                    </div>
                    }
                </div>
            ))}
            {/* {pendingLessonsByPlayer.length === 0 ? (
                <div></div>
            ) :
                (<>
                    <div className="m-4">
                        <h1 className="text-danger">PENDING</h1>
                        {pendingLessonsByPlayer.map((player, playerIdx) => (
                            <div key={playerIdx} className="border rounded p-3">
                                <h3>{player.nick_name}</h3>
                                <div>{player.pendingLessons.map((pendingLesson, lessonIdx) => (
                                    <div key={lessonIdx}>
                                        <Lesson lessons={pendingLesson}></Lesson>
                                    </div>
                                ))}</div>
                            </div>
                        ))}
                    </div>
                </>
                )

            } */}

        </>
    )

}
'use client'

import { Button, Collapse, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
import { AllDetails, courseDetail } from "../services/models";
import { Lesson } from "./Lesson";
import { IconArrowBigRightFilled, IconUserFilled } from "@tabler/icons-react";
import { ApplyLeaveCollapse } from "./ApplyLeaveCollapse";
import  styles  from "../app/(main)/leave.module.scss"
import cx from 'classnames'



interface UserDetailsProps {
    allDetails: AllDetails[],
    courseDetails: courseDetail[]
}



export function HomeInfo(props: UserDetailsProps) {

    // console.log(props.courseDetails)

    const [open, setOpen] = useState(null);
    const info = { ...props.allDetails[0] }

    const toggleCollapse = (id) => {
        setOpen(open === id ? null : id)
    }

    const onCompleteApply = async ()=>{
        setOpen(null)
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
                        <div key={courseIdx} className="participantLessonContainer border rounded mb-2">
                            <div className="participantLessonInfoContent p-3 d-flex justify-content-between align-items-center">
                                <div className="lessonInfoContent" >
                                    <h6 className="mb-3">Next Lesson :</h6>
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
                                <div>
                                    <ApplyLeaveCollapse onComplete={()=>{onCompleteApply()}} student={student} course={course} courseDetails={props.courseDetails}/>
                                </div>
                                </Collapse>
                            </div>
                        </div>
                    ))}
                    {student.courses.length === 0 &&
                        <div className="participantLessonContainer border rounded py-4">
                            <a href="/lesson" className="m-3">Click me to join lesson now ! </a>
                        </div>
                    }
                {student.reschedule.length !== 0 && 
                <div className="pt-2">
                    <h2>Request</h2>
                    {student.reschedule.map((reschedule, rescheduleIdx)=>(
                        <div key={rescheduleIdx} className="d-flex justify-content-between align-items-center border rounded py-4 px-3 mb-2">
                            <div className="px-3">
                                <Lesson lessons={reschedule.original_lesson[0]}/>
                            </div>
                            {reschedule.status === "APPROVED" ?
                            <div className={cx(styles.greenText, "fw-bold")}>{reschedule.status}</div>
                            :
                            <div className={cx(styles.dangerText, "fw-bold")}>{reschedule.status}</div>
                            }
                            
                            <IconArrowBigRightFilled/>
                            <div className="px-3">
                                <Lesson lessons={reschedule.new_lesson[0]}/>
                            </div>
                        </div>
                    ))}
                </div>
                }
                </div>
                



            ))}

            { }
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
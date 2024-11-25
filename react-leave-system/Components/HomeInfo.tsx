'use client'

import { Button, Collapse, FloatingLabel, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { LessonDetail, UserDetails } from "../services/models";
import { Lesson } from "./Lesson";
import { IconUserFilled } from "@tabler/icons-react";

interface UserDetailsProps {
    userDetails: UserDetails[],
    lessonDetails: LessonDetail[]
}



export function HomeInfo(props: UserDetailsProps) {

    const [open, setOpen] = useState(null);
    const [info, setInfo] = useState({ ...props.userDetails[0] })

    const toggleCollapse = (id) => {
        setOpen(open === id ? null : id)
    }
    const defaultLessonsByPlayer = info.players.map(player => {
        const defaultLessons = player.lessons.filter(lesson => lesson.status === 'DEFAULT');
        return { ...player, defaultLessons }; // 返回玩家和他们的DEFAULT课程
    }).filter(player => player.defaultLessons.length > 0); // 只保留有DEFAULT课程的玩家

    const pendingLessonsByPlayer = info.players.map(player => {
        const pendingLessons = player.lessons.filter(lesson => lesson.status === 'PENDING');
        return { ...player, pendingLessons }; // 返回玩家和他们的PENDING课程
    }).filter(player => player.pendingLessons.length > 0); // 只保留有PENDING课程的玩家


    // console.log(info.players[1].lessons)
    // console.log(defaultLessonsByPlayer[1].defaultLessons)
    // console.log(pendingLessonsByPlayer[0].pendingLessons)

    return (
        <>
            {defaultLessonsByPlayer.map((defaultPlayer, defaultPlayerIdx) => (
                <div key={defaultPlayerIdx} className="participantContent m-4">
                    <h2 ><IconUserFilled></IconUserFilled> {defaultPlayer.nick_name}</h2>
                    <div className="participantLessonContainer border rounded">
                        <div className="participantLessonInfoContent p-3 d-flex justify-content-between align-items-center">
                            <div className="lessonInfoContent" >
                                <Lesson lessons={defaultPlayer.defaultLessons[0]} />
                            </div>
                            <Button
                                variant="outline-dark"
                                onClick={() => { toggleCollapse(defaultPlayer.id); }}
                                aria-controls={defaultPlayer.english_name}
                                aria-expanded={open === defaultPlayer.id}
                            >
                                Apply Leave
                            </Button>
                        </div>
                        <div>
                            <Collapse in={open === defaultPlayer.id}>
                                <Form>
                                    <FloatingLabel label='Original Training Date' controlId="OriginalTrainingDateInput" className="mb-3 mx-4">
                                        <Form.Select aria-label="Select..." required>
                                            <option disabled>Select one...</option>
                                            {defaultPlayer.defaultLessons.map((playerLesson, idx) => (
                                                <option key={idx} value={playerLesson.id}>{playerLesson.lesson_name} --- {playerLesson.date} --- {playerLesson.start_time.substring(0, 5)} - {playerLesson.end_time.substring(0, 5)}</option>
                                            ))}
                                        </Form.Select>
                                    </FloatingLabel>
                                    <FloatingLabel label='Request Training Date' controlId="RequestTrainingDateInput" className="mb-3 mx-4">
                                        <Form.Select aria-label="Select..." required>
                                            <option disabled>Select one...</option>
                                            {props.lessonDetails.map((lessonDetail, lessonIdx) => (
                                                <option key={lessonIdx} value={lessonDetail.id}>{lessonDetail.lesson_name} --- {lessonDetail.date} --- {lessonDetail.start_time.substring(0, 5)} - {lessonDetail.end_time.substring(0, 5)}</option>
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
                </div>
            ))}
            {pendingLessonsByPlayer.length === 0 ? (
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

            }

        </>
    )

}
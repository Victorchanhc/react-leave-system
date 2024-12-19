'use client'

import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { courseDetail, Course, Students } from "../services/models";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createReschedule } from "./fetch/reschedule";

interface ApplyLeaveProps{
    student: Students,
    course : Course,
    courseDetails : courseDetail[]
    onComplete : ()=>void
}

interface FormState {
    student_id: number,
    original_lesson_id: number,
    new_lesson_id: number,
    reason?: string
}

export function ApplyLeaveCollapse(props:ApplyLeaveProps) {

    const router = useRouter()

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormState>()
    
    async function submit(data: FormState) {
        await createReschedule(data)
        props.onComplete()
        router.refresh()
        reset()
    }

    return (
        <>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Control {...register("student_id")} value={props.student.id} hidden/>
                <FloatingLabel label='Original Training Date' controlId="OriginalTrainingDateInput" className="mb-3 mx-4">
                    <Form.Select aria-label="Select..." {...register("original_lesson_id")} required>
                        <option disabled>Select one...</option>
                        {props.course.lessons.map((ori_lesson, ori_lessonIdx) => (
                            <option key={ori_lessonIdx} value={ori_lesson.id}>
                                {ori_lesson.course_name} --- 
                                {ori_lesson.venue} --- 
                                {ori_lesson.lesson_date} --- 
                                {ori_lesson.start_time?.substring(0, 5)} - {ori_lesson.end_time?.substring(0, 5)}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel label='Request Training Date' controlId="RequestTrainingDateInput" className="mb-3 mx-4">
                    <Form.Select aria-label="Select..." {...register("new_lesson_id")} required>
                        <option disabled>Select one...</option>
                        {props.courseDetails.map((new_lesson, new_lessonIdx) => (
                            <option key={new_lessonIdx}  value={new_lesson.id}>
                                {new_lesson.name} --- 
                                {new_lesson.venue} --- 
                                {new_lesson.lesson_date?.toISOString().split("T")[0]} --- 
                                {new_lesson.start_time?.substring(0, 5)} - {new_lesson.end_time?.substring(0, 5)}
                            </option>

                        ))}
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel label='Reason' controlId="ReasonTrainingDateInput" className="mb-3 mx-4">
                    <Form.Select aria-label="Select..." {...register("reason")} required>
                        <option disabled>Select one...</option>
                        <option value={'病假'}>病假</option>
                        <option value={'事假'}>事假</option>
                    </Form.Select>
                </FloatingLabel>
                <Form.Group className='mb-4 mx-4'>
                    <Button type='submit' className='container-fluid'> Submit</Button>
                </Form.Group>
            </Form>
        </>

    )
}
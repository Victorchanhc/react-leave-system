"use client"

import { Button, Form } from "react-bootstrap"
import { Students } from "../services/models"
import { useForm } from "react-hook-form"
import { updateStudent } from "./fetch/student"
import { useRouter } from "next/navigation"
import { IconEdit } from "@tabler/icons-react"
import { useState } from "react"


interface studentProps {
    student: Students
}

interface FormState {
    id: number,
    english_name: string,
    nick_name: string,
    chinese_name?: string,
    date_of_birth: string,
    gender: string
}

export function ParticipantInfo(props: studentProps) {

    const router = useRouter()

    const student = props.student
    const [edit, setEdit] = useState(true)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormState>()

    async function submit(data: FormState) {
        await updateStudent(data)
        router.refresh()
        reset
        setEdit(!edit)

    }

    return (
        
            <div className="d-flex justify-content-between p-3">
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Control type="text" {...register("id")} value={student.id} hidden />
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" {...register("english_name")} defaultValue={student.english_name} disabled={edit} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control type="text" {...register("nick_name")} defaultValue={student.nick_name} disabled={edit} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Chinese Name</Form.Label>
                        <Form.Control type="text" {...register("chinese_name")} defaultValue={student.chinese_name} disabled={edit} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="text" {...register("date_of_birth")} defaultValue={student.date_of_birth} disabled={edit} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" {...register("gender")} defaultValue={student.gender} disabled={edit} required />
                    </Form.Group>
                    {
                        !edit && <Button type="submit">Submit</Button>
                    }
                </Form>
                <div className="mt-2 me-2">
                    <IconEdit type="button" onClick={() => { setEdit(!edit) }}></IconEdit>
                </div>
            </div>
    )
        
}
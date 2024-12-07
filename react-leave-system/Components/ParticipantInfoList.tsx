"use client"

import { IconEdit } from "@tabler/icons-react"
import { useState } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { AllDetails } from "../services/models"
import { useForm } from "react-hook-form"
import { updateStudent } from "./fetch/student"
import { useRouter } from "next/navigation"
import { ParticipantInfo } from "./ParticipantInfo"

interface AllDetailsProps {
    allDetails: AllDetails[]
}



export function ParticipantInfoList(props: AllDetailsProps) {

    const detail = props.allDetails[0]


    return (
        <>
            {detail.students.map((student, studentIdx) => (
                <Card key={studentIdx} className="mb-3">
                    
                        <ParticipantInfo student={student}/>
                        
                </Card>
            ))}
        </>

    )
}
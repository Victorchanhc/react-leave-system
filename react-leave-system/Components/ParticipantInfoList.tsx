"use client"

import { Card } from "react-bootstrap"
import { AllDetails } from "../services/models"
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
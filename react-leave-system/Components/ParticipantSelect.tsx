"use client"

import { Fragment } from "react";
import { Form } from "react-bootstrap";
import { AllDetails } from "../services/models";

interface ParticipantSelectProps {
    allDetails: AllDetails []
    
}

export function ParticipantSelect(props: ParticipantSelectProps) {

    const students = props.allDetails[0].students
    
    // console.log(students)
    return (
        <Form className="container-fluid">
            <Form.Check type="checkbox" id={`${props.participant.name}`} >
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label className="container-fluid">{`${props.participant.name}`}</Form.Check.Label>
            </Form.Check>
        </Form>
    )
}
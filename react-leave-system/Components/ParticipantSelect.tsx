"use client"

import { Fragment } from "react";
import { Form } from "react-bootstrap";

interface ParticipantSelectProps {
    participant: {
        name: string
    }
}

export function ParticipantSelect(props: ParticipantSelectProps) {

    console.log(props.participant.name)

    return (
        <Form className="container-fluid">
            <Form.Check type="checkbox" id={`${props.participant.name}`} >
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label className="container-fluid">{`${props.participant.name}`}</Form.Check.Label>
            </Form.Check>
        </Form>
    )
}
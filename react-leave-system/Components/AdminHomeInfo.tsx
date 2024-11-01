"use client"

import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import { Button, Card, Col, Row } from "react-bootstrap";

interface RequestLeaveProps {
    requests: {
        name: string,
        originLesson: string,
        requestLesson: string,
        status: string,
        reason: string

    }[]

}

export function AdminHomeInfo(props: RequestLeaveProps) {



    return (
        <>
            <div className="px-3">
                <h4 className="font-weight-bold">Request</h4>
                <div>
                    {props.requests.map((request, idx) => (
                        <Card key={idx} className="container-fluid">
                            <div className="m-4 h4 fw-bold">{request.name}</div>
                            <Card.Body className="d-flex container-fluid align-items-center">
                                <Row className="container-fluid align-items-center">
                                    <Col md={2}>
                                        <Card.Text> {request.reason}</Card.Text>
                                    </Col>
                                    <Col md={5}>
                                        <Card.Text> {request.originLesson} <IconArrowBadgeRightFilled className="mb-1"/> {request.requestLesson}</Card.Text>
                                    </Col>
                                    <Col md={3}>
                                    <Card.Text className="fw-bold">Status : {request.status}</Card.Text>
                                    </Col>
                                    <Col md={2} className="d-flex">
                                    <Button variant="primary" size="sm" className="me-4">Approve</Button>
                                    <Button variant="danger" size="sm" className="me-4">Reject</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    ))}
                </div>
            </div>
        </>
    )
}
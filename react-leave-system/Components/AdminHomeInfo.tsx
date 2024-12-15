"use client"

import { IconArrowBadgeRightFilled } from "@tabler/icons-react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { lesson, Reschedule } from "../services/models";
import { Lesson } from "./Lesson";
import { updateReschedule } from "./fetch/reschedule";
import { useRouter } from "next/navigation";

interface RequestLeaveProps {
    requests: {
        reschedule_id : number
        english_name: string,
        nick_name: string,
        status: string,
        reason: string,
        original_lesson: lesson[],
        new_lesson:lesson[]

    }[]

}

export function AdminHomeInfo(props: RequestLeaveProps) {

    const router = useRouter()

    const onApprove = async (id:number)=>{
        console.log(id)
        await updateReschedule(id)
        router.refresh()

    }

    console.log(props.requests)

    return (
        <>
            <div className="px-3">
                <h4 className="font-weight-bold">Request</h4>
                <div>
                    {props.requests.map((request, idx) => (
                        <div key={idx}>
                            {request.status === "PENDING" &&
                                <Card className="container-fluid mb-2">
                                    <div className="mx-3 mt-3 mb-0 h4 fw-bold">{request.nick_name} -- {request.english_name}</div>
                                    <Card.Body className="d-flex justify-content-center align-items-center pt-0 pb-2 px-0">
                                        <Row className="container-fluid align-items-center m-0 p-0">
                                            <Col md={8}>
                                                <div className="d-flex align-items-center">
                                                    <Lesson lessons={request.original_lesson[0]} />
                                                    <IconArrowBadgeRightFilled className="mb-1"/>
                                                    <Lesson lessons={request.new_lesson[0]} />
                                                </div>
                                            </Col>
                                            <Col md={2}>
                                                <div>
                                                    <div>Reason :</div>
                                                    <div className="fw-bold">{request.reason}</div>
                                                    <div>Status :</div>
                                                    <div className="fw-bold">{request.status}</div>
                                                </div>
                                            </Col>
                                            <Col md={2} className="d-flex flex-column">
                                                <Button 
                                                    variant="primary" 
                                                    size="sm" 
                                                    className="my-4" 
                                                    onClick={()=>{onApprove(request.reschedule_id)}}>Approve
                                                </Button>
                                                <Button variant="danger" size="sm" className="my-4">Reject</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            }
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
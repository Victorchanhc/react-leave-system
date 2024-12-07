"use client"
import { IconEdit } from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import { Button, Card, Form, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import { userService } from "../services/UserService";
import { sessionStore } from "../services/SessionStore";
import { AllDetails } from "../services/models";
import { updateUser } from "./fetch/user";
import { useRouter } from "next/navigation";

interface AllDetailsProps {
    allDetails: AllDetails[]
}

export function ParentInfo(props: AllDetailsProps) {

    const detail = props.allDetails[0]

    const [edit, setEdit] = useState(true)
    const [username, setUsername] = useState(detail.username)
    const [phone, setPhone] = useState(detail.phone)
    const user_id = detail.user_id

    const router = useRouter()


    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await updateUser(user_id, username, phone)
        setEdit(!edit)
        router.refresh()
    }

    return (
        <>
            <Card >
                <div className="d-flex justify-content-between p-3">
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Parent Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                                disabled={edit}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parent Email</Form.Label>
                            <Form.Control
                                type="text"
                                plaintext
                                readOnly
                                defaultValue={detail.email}
                                disabled={edit}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parent Contact Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                                disabled={edit}
                            />
                        </Form.Group>
                        {
                            !edit &&
                            <Button
                                type="submit">
                                Submit
                            </Button>
                        }
                    </Form>
                    <div className="mt-2 me-2">
                        <IconEdit type="button" onClick={() => { setEdit(!edit) }}></IconEdit>
                    </div>
                </div>
            </Card>
        </>
    )
}
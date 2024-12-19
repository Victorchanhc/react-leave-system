"use client"

import { Button, Modal } from "react-bootstrap";
import { logout } from "./fetch/auth";
import { useRouter } from "next/navigation";

type ConfirmLogoutModelProps = {
    isShow:boolean,
    onHide:()=>void
}

export function ConfirmLogoutModel(props:ConfirmLogoutModelProps) {

    const router = useRouter()

    const onLogout = async () => {
        
        await logout()

        
        router.push('/')
        
        
    }

    return (

        <Modal show={props.isShow} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Logout System</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you confirm to Logout ?
                
                {/* <i className="text-danger">This action cannot be reversed.</i> */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="danger" onClick={onLogout}>
                    Confirm Logout
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
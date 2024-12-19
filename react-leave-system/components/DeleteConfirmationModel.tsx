
import { Modal, Button } from 'react-bootstrap'
import { LessonInfo } from '../services/models'

type DeleteConfirmationModelProps = {
    isShow:boolean,
    lesson:LessonInfo,
    onDelete:()=>void,
    onHide:()=>void
}

export function DeleteConfirmationModel(props:DeleteConfirmationModelProps) {

    return (

        <Modal show={props.isShow} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you confirm to Delete Lesson ?
                <br/>
                <span className="text-primary">{props.lesson.course_name}</span>
                <br/>
                <span className="text-primary">{props.lesson.lesson_date} -- {props.lesson.start_time}</span>
                <br />
                <i className="text-danger">This action cannot be reversed.</i>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="danger" onClick={props.onDelete}>
                    Confirm Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}


import { Button, Form } from "react-bootstrap";
import { Attendance } from "../services/models";
import { updateAttendance } from "../components/fetch/attendance";

interface AttendanceStudentProps {
    attendanceStudent: Attendance[]
}

export function AttendanceForm(props: AttendanceStudentProps) {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const submittedData = props.attendanceStudent.map((student) => ({
            attendance_id: student.attendance_id,
            attended: formData.get(`attended_${student.attendance_id}`) === 'on',
        }));

        console.log(submittedData);

        await updateAttendance(submittedData)
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                {props.attendanceStudent.map((attendance, attendanceIdx) => (
                    <Form.Check key={attendanceIdx} className="my-4" id={`${attendance.attendance_id}`}>
                        <Form.Check.Input
                            type="checkbox"
                            name={`attended_${attendance.attendance_id}`}
                            defaultChecked={attendance.attended}
                        />
                        <Form.Check.Label className="container-fluid">{attendance.nick_name} --- {attendance.english_name}</Form.Check.Label>

                    </Form.Check>
                ))}
                <Button className="container-fluid" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
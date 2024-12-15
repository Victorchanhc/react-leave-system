

import { Button, Form, FormCheck, FormGroup } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Attendance, Courses, lesson } from "../services/models";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { updateAttendance } from "../components/fetch/attendance";

interface AttendanceStudentProps {
    attendanceStudent: Attendance[]
}

interface FormValues {
    attendance: { attendance_id: number; attended: boolean }[];
}

export function AttendanceForm(props: AttendanceStudentProps) {

    const onSubmit = async (e) => {
        e.preventDefault();

        // 提取表單數據
        const formData = new FormData(e.target);

        // 整理數據
        const submittedData = props.attendanceStudent.map((student) => ({
            attendance_id: student.attendance_id,
            attended: formData.get(`attended_${student.attendance_id}`) === 'on', // checkbox 值
        }));

        console.log(submittedData);

        await updateAttendance(submittedData)
        // router.refresh()
        // 傳遞數據給父組件或處理邏輯
        // handleSubmit(submittedData);
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                {props.attendanceStudent.map((attendance, attendanceIdx) => (
                    <Form.Check key={attendanceIdx} className="my-4" id={`${attendance.attendance_id}`}>
                        <Form.Check.Input
                            type="checkbox"
                            name={`attended_${attendance.attendance_id}`} // 為每個學生設置唯一的名稱
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
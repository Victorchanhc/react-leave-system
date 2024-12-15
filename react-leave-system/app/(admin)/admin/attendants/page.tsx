import { AttendantLessonList } from "../../../../AdminComponents/AttendancesLessonList";
import { adminCourseService } from "../../../../services/AdminCourseService";


export default async function attendants(){

    const attendances = await adminCourseService.adminGetAttendants()

    return(
        <div>
            <div className="ms-3 mt-3">
                <h1 className="fw-bold">Attendants</h1>
            </div>
            <div>
                <AttendantLessonList attendances={attendances}/>
            </div>
        </div>
    )
}
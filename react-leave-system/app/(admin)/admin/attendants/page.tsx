import { headers } from "next/headers";
import { AttendantLessonList } from "../../../../admin-components/AttendancesLessonList";
import { adminCourseService } from "../../../../services/AdminCourseService";


export default async function attendants(){

    const attendances = await adminCourseService.adminGetAttendants()
    
    headers()
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
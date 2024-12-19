
import { AdminLessonList } from "../../../../admin-components/AdminLessonList";
import { AddNewLessonCollapse } from "../../../../admin-components/AddNewCourseCollapse";
import { adminCourseService } from "../../../../services/AdminCourseService";
import { headers } from "next/headers";


export default async function lessonList(){
    
    let courses = [];

    try {
        courses = await adminCourseService.adminGetCourses()
    } catch (error) {
        console.error("Error fetching reschedule data:", error);
    }
    
    headers()
    return(
        <div>
            <div className="ms-3 mt-3">
                <h1 className="fw-bold">Lesson List</h1>
            </div>
            <div>
                <AdminLessonList courses={courses}/>
                <AddNewLessonCollapse />
            </div>
        </div>
    )
}
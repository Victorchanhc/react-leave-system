
import { AdminLessonList } from "../../../../AdminComponents/AdminLessonList";
import { AddNewLessonCollapse } from "../../../../AdminComponents/AddNewCourseCollapse";
import { adminCourseService } from "../../../../services/AdminCourseService";


export default async function lessonList(){
    
    let courses = [];

    try {
        courses = await adminCourseService.adminGetCourses()
    } catch (error) {
        console.error("Error fetching reschedule data:", error);
    }
    

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
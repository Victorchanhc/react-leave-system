
import { AdminLessonList } from "../../../../AdminComponents/AdminLessonList";
import { AddNewLessonCollapse } from "../../../../AdminComponents/AddNewCourseCollapse";
import { adminCourseService } from "../../../../services/AdminCourseService";


export default async function lessonList(){
    
    const courses = await adminCourseService.adminGetCourses()

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
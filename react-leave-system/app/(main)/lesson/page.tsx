
import { headers } from "next/headers";
import { LessonList } from "../../../components/LessonList";
import { userService } from "../../../services/UserService";

export default async function LessonPage() {


    // Should only show courses without an enrollment
    const lessonDetails = await userService.getCourses()

    headers()
    return (
        <div>
            <h1 className="text-center mt-3 ">
                Welcome to STFC's Lessons
            </h1>
            <LessonList courses={lessonDetails} />
        </div>
    );
}
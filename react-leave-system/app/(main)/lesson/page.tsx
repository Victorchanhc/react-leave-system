
import { LessonList } from "../../../components/LessonList";
import { userService } from "../../../services/UserService";

export default async function LessonPage() {

    const lessonDetails = await userService.getCourses()

    return (
        <div>
            <h1 className="text-center mt-3 ">
                Welcome to STFC
            </h1>
            <LessonList courses={lessonDetails} />
        </div>
    );
}
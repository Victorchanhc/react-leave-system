import { AddNewParticipantCollapse } from "../../../../../components/AddNewParticipantCollapse"
import { userService } from "../../../../../services/UserService"
import { sessionStore } from "../../../../../services/SessionStore"
import { JoinLesson } from "../../../../../components/JoinLesson"
import { IconArrowLeft } from "@tabler/icons-react"

interface JoinLessonProps {
    params: {
        id: string
    },
    searchParams: {
        q: string
    }
}


export default async function JoinLessonIDPage(props: JoinLessonProps) {

    const id = props.params.id
    const q = props.searchParams.q
    const user = await sessionStore.get()

    console.log(id)

    const userDetails = await userService.parentGetLessons(user.id)

    const courseDetails = await userService.getCourses()

    const course = courseDetails.find(course => course.course_id === parseInt(id))

    return (
        <div className="container-fluid">
            <div className="d-flex m-3">
                <a href="/lesson" className="mx-3 align-self-center font-weight-bold"><IconArrowLeft></IconArrowLeft></a>
                
                <h1>Join Lesson</h1>
            </div>
            <JoinLesson course={course} allDetails={userDetails} />
            <div className="border border-dark rounded mx-3 mb-2 p-2 ">
                <AddNewParticipantCollapse user_id={user.id}/>
            </div>
        </div>
    )
}
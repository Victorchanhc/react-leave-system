import { Accordion } from "react-bootstrap"
import { AttendantLessonAccordion} from "./AttendancesLessonAccordion"
import { Courses } from "../services/models"


interface AttendantLessonProps {
    attendances: Courses[]
}

export function AttendantLessonList(props :AttendantLessonProps){

    return(
        <div>
            <div className="attendantContainer">
                <div className="attendantLessonContent container-fluid">
                    {props.attendances.map((courseList, courseListIdx) => (
                        <div key={courseListIdx}>
                            <Accordion  className="mx-2 p-2 mb-2">
                                {/* add the lesson to collapse for easily to control the edit button at the end of card */}
                                <AttendantLessonAccordion courseList={courseList} />
                            </Accordion>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
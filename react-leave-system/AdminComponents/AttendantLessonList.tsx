import { Accordion, Card } from "react-bootstrap"
import { AttendantLessonCollapse } from "./AttendantLessonCollapse"


interface AttendantLessonProps {
    attendantDatas: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string,
        participantName:string,
        participantNickName:string,
        participantStatus:boolean
    }[]
    
    
}

export function AttendantLessonList(props :AttendantLessonProps){
    return(
        <div>
            <div className="attendantContainer">
                <div className="attendantLessonContent container-fluid">
                    {props.attendantDatas.map((attendantData, idx) => (
                        <Accordion key={idx} className="mx-2 p-2 mb-2">
                            {/* add the lesson to collapse for easily to control the edit button at the end of card */}
                            <AttendantLessonCollapse attendantData={attendantData} />
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    )
}
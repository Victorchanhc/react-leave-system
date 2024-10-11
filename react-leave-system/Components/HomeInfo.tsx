import { Button } from "react-bootstrap";
import { Lesson } from "./Lesson";



export function HomeInfo() {

    const lessons = 
        {
            id: 1,
            name: "星期日 上午 荃灣",
            date: ["5/12","13/12","20/12"],
            startTime: "11:30",
            endTime:"13:00",
            venue:"城門谷五人場"
        }
        
    

    return (
        <div className="participantContent m-4">
            <h2>Participant Name</h2>
            <div className="participantLessonContainer p-3 d-flex border rounded justify-content-between align-items-center">
                <div className="lessonInfoContent">
                    <Lesson lessons={lessons} />
                </div>
                <div className="editButtonContent">
                    <Button variant="outline-dark">Edit</Button>
                </div>
            </div>
        </div>
    )
}
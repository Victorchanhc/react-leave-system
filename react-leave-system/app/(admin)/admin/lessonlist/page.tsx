
import { AdminLessonList } from "../../../../AdminComponents/AdminLessonList";
import { AddNewLessonCollapse } from "../../../../AdminComponents/AddNewLessonCollapse";


export default function lessonList(){
    

    const lessons = [
        {
            id: 1,
            name: "星期日 上午 荃灣",
            date: ["2024/12/05"],
            startTime: "11:30",
            endTime: "13:00",
            venue: "城門谷五人場"
        },
        {
            id: 2,
            name: "星期六 下午 葵涌",
            date: ["5/10", "15/10", "27/10"],
            startTime: "18:00",
            endTime: "19:30",
            venue: "坑坪街遊樂場"
        },
        {
            id: 3,
            name: "星期五 下午 荃灣",
            date: ["5/10", "15/10", "27/10"],
            startTime: "18:00",
            endTime: "19:30",
            venue: "沙咀道遊樂場"
        },
        {
            id: 4,
            name: "星期六 上午 荃灣",
            date: ["5/10", "15/10", "27/10"],
            startTime: "09:00",
            endTime: "10:30",
            venue: "沙咀道遊樂場"
        }
    ]

    return(
        <div>
            <div className="ms-3 mt-3">
                <h1 className="fw-bold">Lesson List</h1>
            </div>
            <div>
                <AdminLessonList lessons={lessons}/>
                <AddNewLessonCollapse />
            </div>
        </div>
    )
}
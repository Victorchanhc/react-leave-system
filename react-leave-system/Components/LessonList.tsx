import { ListGroup, ListGroupItem } from "react-bootstrap";

interface LessonListProps {
    lessons: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string
    }[]
}


// export function LessonList(props: LessonListProps) {


//     return (
//         <div>
//             <ListGroup>
//                 {props.lessons.map((lesson, idx)=>(
//                     <ListGroupItem key={idx}>
//                         <Lesson lesson={lesson.name}/>
//                         <Lesson lesson={lesson.date}/>
//                         <Lesson lesson={(lesson.startTime)+ "-" + (lesson.endTime) }/>
//                         <Lesson lesson={lesson.venue}/>
//                     </ListGroupItem>
//                 ))}
//             </ListGroup>
//         </div>
//     )
// }

interface LessonProps {
    lessons: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string
    }
}

export function Lesson(props: LessonProps) {
    return (
        <div>
            <h4>{props.lessons.name}</h4>
            <div>{props.lessons.date}</div>
            <div>{(props.lessons.startTime) + " - " + (props.lessons.endTime)}</div>
            <div>{props.lessons.venue}</div>
        </div>
    )
}
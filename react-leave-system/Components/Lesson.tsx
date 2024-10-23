"use client"

import { useRouter } from "next/navigation"

interface LessonProps {
    lesson: {
        id: number,
        name: string,
        date: string[],
        startTime: string,
        endTime: string,
        venue: string
    }
}

export function Lesson(props: LessonProps) {

    const router = useRouter()

    // const joinLesson = (id: number)=>{
    //     router.push("/lesson/join")
    // }

    return (
        <>
            <div>
                <h4>{props.lesson.name}</h4>
                <div>{props.lesson.date}</div>
                <div>{(props.lesson.startTime) + " - " + (props.lesson.endTime)}</div>
                <div>{props.lesson.venue}</div>
            </div>
        </>
        
    )
}
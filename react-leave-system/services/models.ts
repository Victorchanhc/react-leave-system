import { time } from "console"

export interface User {
    id: number
    username: string
    phone: string
    email: string
    password: string
    role: string
}

export interface courseDetail {
    id: number,
    name: string,
    description: string,
    created_at?: string,
    updated_at?: string,
    course_id: number,
    lesson_date: Date,
    start_time: string,
    end_time: string,
    venue: string,
    is_canceled: boolean,
    canceled_reason?: string
}


export interface AllDetails {

    user_id: number,
    username: string,
    phone: string,
    email: string,
    students: Students[]
    // id: number,
    // lesson_id: number,
    // player_id: number,
    // status: string,
    // lesson_name: string,
    // date: string,
    // start_time: string,
    // end_time: string,
    // venue: string,
    // english_name: string,
    // nick_name: string
}

export interface Students {
    id: number,
    english_name: string,
    nick_name: string,
    chinese_name: string,
    date_of_birth: string,
    gender: string,
    courses: Course[],
    reschedule: Reschedule []
    // defaultLessons?: Lessons[],
    // pendingLessons?: Lessons[]
}

export interface Course {
    course_id: number,
    course_name: string,
    description?: string,
    lessons?: LessonInfo[]
    }

export interface LessonInfo {
    id?: number,
    lesson_id? : number,
    course_name? : string,
    lesson_date: string,
    start_time: string,
    end_time: string,
    venue?: string,
    canceled_reason?: string,
    attendance?: Attendance[]
}

export interface Reschedule {
    id: number,
    original_lesson : LessonInfo[],
    new_lesson : LessonInfo[],
    reason : string,
    status : string
}

export interface Attendance {
    attendance_id : number,
    attended : boolean,
    rescheduled : boolean,
    attended_lesson_id:number,
    student_id : number,
    english_name : string,
    nick_name : string,
    chinese_name : string,
    gender : string
}

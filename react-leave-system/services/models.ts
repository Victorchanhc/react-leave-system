import { time } from "console"

export interface User {
    id: number
    username: string
    phone: string
    email: string
    password: string
    role: string
}

export interface LessonDetail {
    id: number,
    lesson_name : string,
    date: string,
    start_time: string,
    end_time: string,
    venue: string
}


export interface UserDetails {

        userId : number,
        username : string,
        phone : string,
        email : string,
        players : Players[]
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

    export interface Players {
        id : number,
        english_name : string,
        nick_name : string,
        chinese_name : string,
        date_of_birth : string,
        gender : string,
        lessons : Lessons [],
        defaultLessons? : Lessons [],
        pendingLessons? : Lessons []
    }

    export interface Lessons {
        id : number,
        lesson_name : string,
        date : string,
        start_time : string,
        end_time : string,
        venue :  string,
        status : string,
        reason : string
    }


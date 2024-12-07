import { Knex } from "knex";
import { User } from "./models";
import { knex } from "./knex";
import { hashPassword } from "./bcrypt";
// import { sessionStore, sessionStore } from "./SessionStore";


export class UserService {

    constructor(private knex: Knex) {

    }

    async getUser(email: string): Promise<User> {
        return (await this.knex.select('*')
            .from('users')
            .where('email', email)
        )[0]
    }

    async getSelectCourses() {
        return this.knex('courses').select('*')
        .leftJoin('course_lessons','course_lessons.course_id','courses.id')
        .groupBy('courses.id','course_lessons.id')
        .orderBy('courses.id','course_lessons.id')
    }

    async getCourses() {
        const result = await knex('courses')
            .select('courses.id AS course_id', 'name AS course_name', 'description')
            .select(
                knex.raw(
                    `COALESCE(
                        json_agg(
                            json_build_object(
                                'id',course_lessons.id,
                                'lesson_date',course_lessons.lesson_date,
                                'start_time',course_lessons.start_time,
                                'end_time',course_lessons.end_time,
                                'venue',course_lessons.venue
                            )
                        ),'[]'
                        )AS lessons`
                )
            ).leftJoin('course_lessons','course_lessons.course_id','courses.id')
            .groupBy('courses.id')

            return result
    }

    async parentGetLessons(id: number) {
        const result = await knex('users')
            .select('users.id AS user_id', 'username', 'phone', 'email')
            .select(
                knex.raw(`COALESCE(
                    json_agg(
                        json_build_object(
                            'id', students.id,
                            'english_name' , students.english_name,
                            'nick_name' , students.nick_name,
                            'chinese_name' , students.chinese_name,
                            'date_of_birth' , students.date_of_birth,
                            'gender' , students.gender,
                            'courses', COALESCE(
                                (SELECT 
                                    json_agg(
                                        json_build_object(
                                            'course_id', courses.id,
                                            'course_name', courses.name,
                                            'description', courses.description,
                                            'lessons', COALESCE(
                                                (SELECT
                                                    json_agg(
                                                        json_build_object(
                                                        'id', course_lessons.id,
                                                        'lesson_date', course_lessons.lesson_date,
                                                        'start_time', course_lessons.start_time,
                                                        'end_time', course_lessons.end_time,
                                                        'venue', course_lessons.venue,
                                                        'canceled_reason', course_lessons.canceled_reason
                                                        )
                                                    )
                                                    FROM course_lessons
                                                    WHERE course_lessons.course_id = courses.id
                                                ),'[]'
                                            )
                                        )
                                    )
                                    FROM enrollments
                                    JOIN courses ON courses.id = enrollments.course_id
                                    WHERE enrollments.student_id = students.id
                                ),'[]'
                            )
                        )ORDER BY students.id 
                    )FILTER (WHERE students.id IS NOT NULL), '[]'
                    )  AS students `)
            
            ).leftJoin('students', 'students.user_id', 'users.id')
            .groupBy('users.id')
            .where('users.id', id);

        return result
    }

    async createUser(data){
        const password = await hashPassword(data.password)
        return knex.insert({
            username : data.username,
            phone : data.phone,
            email : data.email,
            password : password
        }).into('users')
    }

    async updateUser(id:number, username:string, phone:string){
        return knex('users').where('users.id','=',id).update(
            {
                username : username,
                phone : phone
            }
        )
    }
}

export const userService = new UserService(knex);
import { Knex } from "knex";
import { knex } from "./knex";


export class AdminCourseService {

    constructor(private knex: Knex) { }

    async adminGetAttendants(){
        return knex('courses').select('id AS course_id', 'name AS course_name')
        .select(
            knex.raw(
                `
                    COALESCE(
                        (SELECT
                            json_agg(
                                json_build_object(
                                'lesson_id', course_lessons.id,
                                'course_name', courses.name,
                                'lesson_date', course_lessons.lesson_date,
                                'start_time', course_lessons.start_time,
                                'end_time', course_lessons.end_time,
                                'venue', course_lessons.venue,
                                'canceled_reason', course_lessons.canceled_reason,
                                'attendance',COALESCE(
                                    (SELECT
                                        json_agg(
                                            json_build_object(
                                                'attendance_id', attendance_records.id,
                                                'attended', attendance_records.attended,
                                                'rescheduled', attendance_records.rescheduled,
                                                'attended_lesson_id', attendance_records.lesson_id,
                                                'student_id', students.id,
                                                'english_name', students.english_name,
                                                'nick_name', students.nick_name,
                                                'chinese_name', students.chinese_name,
                                                'gender', students.gender
                                                
                                            )
                                        )
                                        FROM attendance_records
                                        JOIN students ON students.id = attendance_records.student_id
                                        WHERE attendance_records.lesson_id = course_lessons.id
                                    ),'[]'
                                )
                            )
                        )
                        FROM course_lessons
                        WHERE course_lessons.course_id = courses.id
                    ),'[]'
                )AS lessons`
            )
        )
    }

    async adminGetCourses() {
        return this.knex('courses').select('id AS course_id', 'name AS course_name', 'description')
            .select(
                knex.raw(
                    `
                    COALESCE(
                        (SELECT
                            json_agg(
                                json_build_object(
                                'lesson_id', course_lessons.id,
                                'course_name', courses.name,
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
                    )AS lessons`
                )
            )
            .orderBy("courses.id")
    }

    async createCourse(data) {

        return knex.insert({
            name:data.name,
            description:data.description
        }).into('courses')
    }

    async updateCourse(data) {
        console.log("get in service PUT")

        return knex('courses').where('courses.id', '=', data.lesson_id).update(
            {
                lesson_date: data.lesson_date,
                start_time: data.start_time,
                end_time: data.end_time,
                venue: data.venue,
                canceled_reason: data.canceled_reason
            }
        )
    }

    async deleteCourse(data) {

        return knex('courses').where('courses.id', '=', data).del()
    }

    async createLesson(data) {

        return knex.insert({
            course_id: data.course_id,
            lesson_date: data.lesson_date,
            start_time: data.start_time,
            end_time: data.end_time,
            venue: data.venue,
        }).into('course_lessons')
    }

    async updateLesson(data) {
        console.log("get in service PUT")

        return knex('course_lessons').where('course_lessons.id', '=', data.lesson_id).update(
            {
                lesson_date: data.lesson_date,
                start_time: data.start_time,
                end_time: data.end_time,
                venue: data.venue,
                canceled_reason: data.canceled_reason
            }
        )
    }

    async deleteLesson(data) {

        return knex('course_lessons').where('course_lessons.id', '=', data).del()
    }

    async updateAttendance(data) {
        const attendanceData = data

        for (const record of attendanceData) {
            await knex('attendance_records')
                .where('attendance_records.id','=', record.attendance_id)
                .update({ attended: record.attended });
        }
        console.log("Attendance records updated successfully.");
    }
}
export const adminCourseService = new AdminCourseService(knex);
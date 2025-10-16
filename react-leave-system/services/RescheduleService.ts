import { Knex } from "knex";
import { knex } from "./knex";

export class RescheduleService {

    constructor(private knex: Knex) { }

    async getReschedule() {
        const result = knex('reschedule_assignments')
            .select('reschedule_assignments.id AS reschedule_id', 'students.english_name', 'students.nick_name', 'reason', 'status')
            .select(
                knex.raw(
                    `COALESCE(
                    (SELECT
                        json_agg(
                            json_build_object(
                            'ori_lesson_id', course_lessons.id,
                            'course_name', courses.name,
                            'lesson_date', course_lessons.lesson_date,
                            'start_time', course_lessons.start_time,
                            'end_time', course_lessons.end_time,
                            'venue', course_lessons.venue,
                            'canceled_reason', course_lessons.canceled_reason
                            )
                        )
                        FROM course_lessons
                        JOIN courses ON courses.id = course_lessons.course_id
                        WHERE course_lessons.id = reschedule_assignments.original_lesson_id
                    ),'[]'
                )AS original_lesson,
                COALESCE(
                    (SELECT
                        json_agg(s
                            json_build_object(
                            'new_lesson_id', course_lessons.id,
                            'course_name', courses.name,
                            'lesson_date', course_lessons.lesson_date,
                            'start_time', course_lessons.start_time,
                            'end_time', course_lessons.end_time,
                            'venue', course_lessons.venue,
                            'canceled_reason', course_lessons.canceled_reason
                            )
                        )
                        FROM course_lessons
                        JOIN courses ON courses.id = course_lessons.course_id
                        WHERE course_lessons.id = reschedule_assignments.new_lesson_id
                    ),'[]'
                )AS new_lesson

            `)
            )
            .leftJoin('students', 'students.id', 'reschedule_assignments.student_id')
            .where('status', '=', 'PENDING')

        return result
    }

    async createReschedule(data) {

        return knex.insert({
            student_id: data.student_id,
            original_lesson_id: data.original_lesson_id,
            new_lesson_id: data.new_lesson_id,
            reason: data.reason
        }).into('reschedule_assignments')
    }

    async updateReschedule(id: number) {

        return knex('reschedule_assignments').where('reschedule_assignments.id', '=', id).update(
            {
                status: 'APPROVED'
            }
        )
    }
}

export const rescheduleService = new RescheduleService(knex);
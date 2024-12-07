import { Knex } from "knex";
import { knex } from "./knex";



export class EnrollmentService {

    constructor(private knex : Knex){}

    async createEnrollment(data){
        
        return knex.insert({
            student_id : data.student_id,
            course_id : data.course_id
        }).into('enrollments')
    }

    async updateEnrollment(data){
        console.log("get in service PUT")
    
            return knex('enrollment').where('students.id','=',data.id).update(
                {
                    course_id : data.course_id
                }
            )
        }
}

export const enrollmentService = new EnrollmentService(knex);
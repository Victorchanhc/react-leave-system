import { Knex } from "knex";
import { knex } from "./knex";



export class StudentService {

    constructor(private knex : Knex) {}

    async createStudent(data){
        
        return knex.insert({
            english_name : data.english_name,
            nick_name : data.nick_name,
            chinese_name: data.chinese_name,
            date_of_birth : data.date_of_birth,
            gender : data.gender,
            user_id : data.user_id
        }).into('students')
    }

    async updateStudent(data){
    console.log("get in service PUT")

        return knex('students').where('students.id','=',data.id).update(
            {
                english_name : data.english_name,
                nick_name : data.nick_name,
                chinese_name: data.chinese_name,
                date_of_birth : data.date_of_birth,
                gender : data.gender
            }
        )
    }
}

export const studentService = new StudentService(knex);
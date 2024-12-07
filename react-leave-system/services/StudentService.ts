import { Knex } from "knex";
import { knex } from "./knex";



export class StudentService {

    constructor(private knex : Knex) {}

    async createStudent(data){
        
        return knex.insert({
            username : data.username,
            phone : data.phone,
            email : data.email,
            // password : password
        }).into('users')
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
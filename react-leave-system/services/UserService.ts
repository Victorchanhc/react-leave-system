import { Knex } from "knex";
import { User } from "./models";
import { knex } from "./knex";


export class UserService{

    constructor (private knex:Knex){
        
    }

    async getUser(email:string):Promise<User>{
        return (await this.knex.select('*')
            .from('users')
            .where('email', email)
        )[0]
    }

    async userGetLessons(){
        // return this.knex.select('participants.id','participants.lesson_id', 'participants.player_id','lessons.name','lessons.date','le').from('lessons')

        // select * from lessons inner join participants on lessons.id = participants.lesson_id inner join players on players.id = participants.player_id where players.parent_id = (select users.id from users where users.email = 'test1@gmail.com');

    }
}

export const userService = new UserService(knex);
import { Knex } from "knex";
import { User } from "./models";
import { knex } from "./knex";
import { sessionStore, SessionStore } from "./SessionStore";


export class UserService{

    constructor (private knex:Knex){
        
    }

    async getUser(email:string):Promise<User>{
        return (await this.knex.select('*')
            .from('users')
            .where('email', email)
        )[0]
    }

    async getLesson(){
        return this.knex.select('*').from('lessons')
    }

    async userGetLessons(id:number){
        const result = await knex('users')
            .select('users.id AS userID', 'username', 'phone', 'email')
            .select(
                knex.raw(`COALESCE(
                json_agg(
                  json_build_object(
                    'id', players.id,
                    'english_name' , players.english_name,
                    'nick_name' , players.nick_name,
                    'chinese_name' , players.chinese_name,
                    'date_of_birth' , players.date_of_birth,
                    'gender' , players.gender,
                    'lessons', COALESCE(
                      (SELECT 
                         json_agg(
                           json_build_object(
                             'id', lessons.id,
                             'lesson_name', lessons.lesson_name,
                             'date', lessons.date,
                             'venue', lessons.venue,
                             'start_time', lessons.start_time,
                             'end_time' , lessons.end_time,
                             'status', participants.status,
                             'reason', participants.reason
                           )
                         )
                       FROM participants
                       JOIN lessons ON lessons.id = participants.lesson_id
                       WHERE participants.player_id = players.id
                      ), '[]'
                    )
                  )
                ) FILTER (WHERE players.id IS NOT NULL), '[]'
              ) AS players`)
            ).leftJoin('players', 'players.parent_id', 'users.id')
  .groupBy('users.id')
  .where('users.id',id);

  return result
    }

    async userFetchLessons(id:number){
        return this.knex.select(
            'participants.id','participants.lesson_id',
            'participants.player_id','participants.status',
            'lessons.lesson_name','lessons.date',
            'lessons.start_time','lessons.end_time','lessons.venue',
            'players.english_name','players.nick_name').from('lessons')
            .innerJoin('participants','lessons.id','participants.lesson_id')
            .innerJoin('players','players.id','participants.player_id')
            .where('players.parent_id',id)
            

        // select * from lessons inner join participants on lessons.id = participants.lesson_id inner join players on players.id = participants.player_id where players.parent_id = (select users.id from users where users.email = );

    }
}

export const userService = new UserService(knex);
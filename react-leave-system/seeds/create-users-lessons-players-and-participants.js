/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('participants').del()
    await knex('players').del()
    await knex('lessons').del()
    await knex('users').del()

    await knex('users').insert([
        {
            username: 'superAdmin',
            phone: '64099717',
            email: 'admin@southteenfc.com',
            password: '123456',
            role: 'ADMIN'
        },
        {
            username: 'test1',
            phone: '64800144',
            email: 'test1@gmail.com',
            password: '112233'
        },
        {
            username: 'test2',
            phone: '55964745',
            email: 'test2@gmail.com',
            password: '223344'
        }
    ]);

    await knex('lessons').insert([
        {
            lesson_name:'星期日 上午 荃灣',
            date:'2024-01-01',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            lesson_name:'星期日 上午 荃灣',
            date:'2024-01-08',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            lesson_name:'星期六 下午 荃灣',
            date:'2024-01-07',
            start_time:'18:00:00',
            end_time:'20:00:00',
            venue:'沙咀道遊樂場'
        },
        {
            lesson_name:'星期六 上午 葵涌',
            date:'2024-01-07',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'坑坪街遊樂場'
        },
    ]);

    await knex('players').insert([
        {
            english_name:'Jacko Wan',
            nick_name:'Jacko',
            chinese_name:'陳奕迅',
            date_of_birth:'2018-08-18',
            gender:'Male',
            parent_id:2
        },
        {
            english_name:'Chan Tai Man',
            nick_name:'Ko',
            chinese_name:'陳大文',
            date_of_birth:'2017-06-16',
            gender:'Male',
            parent_id:3
        },
        {
            english_name:'Chan Siu Siu',
            nick_name:'Small',
            chinese_name:'陳小小',
            date_of_birth:'2017-06-16',
            gender:'Female',
            parent_id:3
        }
    ])

    await knex('participants').insert([
        {
            player_id:1,
            lesson_id:1
        },
        {
            player_id:1,
            lesson_id:2
        },
        {
            player_id:2,
            lesson_id:1
        },
        {
            player_id:2,
            lesson_id:2
        },
        {
            player_id:2,
            lesson_id:4
        },
        {
            player_id:3,
            lesson_id:4
        },
        {
            player_id:3,
            lesson_id:2,
            request_lesson_id:3,
            reason:'sick',
            status:'PENDING'
        }
    ])

};

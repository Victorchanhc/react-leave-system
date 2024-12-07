/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('attendance_records').del()
    await knex('reschedule_assignments').del()
    await knex('enrollments').del()
    await knex('course_lessons').del()
    await knex('courses').del()
    await knex('students').del()
    await knex('users').del()

    await knex('users').insert([
        {
            id:1,
            username: 'superAdmin',
            phone: '64099717',
            email: 'admin@southteenfc.com',
            password: '$2a$10$kLDK6WBhBZE70NIDi4azl.LljSF/huyZo7P21Epd1vLNJCedCJb16',
            role: 'ADMIN'
        },
        {
            id:2,
            username: 'test1',
            phone: '64800144',
            email: 'test1@gmail.com',
            password: '$2a$10$jzh7E/mJVjCihlorWPEJPuXEvTL9xh7RtOdoa03yUHsqPdAIBBFSy'
        },
        {
            id:3,
            username: 'test2',
            phone: '55964745',
            email: 'test2@gmail.com',
            password: '$2a$10$yjcXXSHDvrJ45joVGk1EVOZFGJsv/ZKjr15.7YPv6E4AKSobrmuyq'
        }
    ]);

    await knex('students').insert([
        {
            id:1,
            english_name:'Jacko Wan',
            nick_name:'Jacko',
            chinese_name:'陳奕迅',
            date_of_birth:'2018-08-18',
            gender:'Male',
            user_id:2
        },
        {
            id:2,
            english_name:'Chan Tai Man',
            nick_name:'Chan',
            chinese_name:'陳大文',
            date_of_birth:'2017-06-16',
            gender:'Male',
            user_id:3
        },
        {
            id:3,
            english_name:'Chan Siu Siu',
            nick_name:'Small',
            chinese_name:'陳小小',
            date_of_birth:'2017-06-16',
            gender:'Female',
            user_id:3
        }
    ])

    await knex('courses').insert([
        {
            id:1,
            name:'星期日 上午 荃灣',
            description:'This is a fun game course on sunday'
        },
        {
            id:2,
            name:'星期六 下午 荃灣',
            description:'This is a fun game course on saturday'
        },
        {
            id:3,
            name:'星期六 上午 葵涌',
            description:'This is a fun game course on Kwai Chung'
        },
        {
            id:4,
            name:'星期五 晚上 葵涌',
            description:'This is a fun game course on Kwai Chung'
        }
    ])

    await knex('course_lessons').insert([
        {
            id:1,
            course_id:1,
            lesson_date:'2024-01-01',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            id:2,
            course_id:1,
            lesson_date:'2025-01-01',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            id:3,
            course_id:1,
            lesson_date:'2025-01-08',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            id:4,
            course_id:2,
            lesson_date:'2025-01-07',
            start_time:'18:00:00',
            end_time:'20:00:00',
            venue:'沙咀道遊樂場'
        },
        {
            id:5,
            course_id:3,
            lesson_date:'2025-01-07',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'坑坪街遊樂場'
        },
        {
            id:6,
            course_id:4,
            lesson_date:'2025-01-13',
            start_time:'19:00:00',
            end_time:'21:00:00',
            venue:'坑坪街遊樂場'
        },
    ]);


    await knex('enrollments').insert([
        {
            student_id:1,
            course_id:1
        },
        {
            student_id:2,
            course_id:2
        },
        {
            student_id:3,
            course_id:3
        }
    ])

    await knex('reschedule_assignments').insert([
        {
            student_id:1,
            original_lesson_id:3,
            new_lesson_id:6,
            reason:'sick'
        }
    ])

    await knex('attendance_records').insert([
        {
            student_id:1,
            lesson_id:1,
        },
        {
            student_id:1,
            lesson_id:2,
        },
        {
            student_id:1,
            lesson_id:3,
        },
        {
            student_id:2,
            lesson_id:4,
        },
        {
            student_id:3,
            lesson_id:1,
        },
        {
            student_id:3,
            lesson_id:2,
        },
        {
            student_id:3,
            lesson_id:3,
        },
    ])

};

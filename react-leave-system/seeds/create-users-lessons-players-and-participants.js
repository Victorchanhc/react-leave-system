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

    const [{id: userId1}, {id: userId2}, {id: userId3}] = await knex('users').insert([
        {
            username: 'superAdmin',
            phone: '64099717',
            email: 'admin@southteenfc.com',
            password: '$2a$10$kLDK6WBhBZE70NIDi4azl.LljSF/huyZo7P21Epd1vLNJCedCJb16',
            role: 'ADMIN'
        },
        {
            username: 'test1',
            phone: '64800144',
            email: 'test1@gmail.com',
            password: '$2a$10$jzh7E/mJVjCihlorWPEJPuXEvTL9xh7RtOdoa03yUHsqPdAIBBFSy'
        },
        {
            username: 'test2',
            phone: '55964745',
            email: 'test2@gmail.com',
            password: '$2a$10$yjcXXSHDvrJ45joVGk1EVOZFGJsv/ZKjr15.7YPv6E4AKSobrmuyq'
        }
    ]).returning('id');


    // TODO, return ID from seed file to input your data

    const [{id: studentId1}, {id: studentId2}, {id:studentId3}] =  await knex('students').insert([
        {
            english_name:'Jacko Wan',
            nick_name:'Jacko',
            chinese_name:'陳奕迅',
            date_of_birth:'2018-08-18',
            gender:'Male',
            user_id:userId2
        },
        {
            english_name:'Chan Tai Man',
            nick_name:'Chan',
            chinese_name:'陳大文',
            date_of_birth:'2017-06-16',
            gender:'Male',
            user_id:userId3
        },
        {
            english_name:'Chan Siu Siu',
            nick_name:'Small',
            chinese_name:'陳小小',
            date_of_birth:'2017-06-16',
            gender:'Female',
            user_id:userId3
        }
    ]).returning("id");

    const [{id:coursesId1}, {id:coursesId2}, {id:coursesId3}, {id:coursesId4}] = await knex('courses').insert([
        {
            name:'星期日 上午 荃灣',
            description:'This is a fun game course on sunday'
        },
        {
            name:'星期六 下午 荃灣',
            description:'This is a fun game course on saturday'
        },
        {
            name:'星期六 上午 葵涌',
            description:'This is a fun game course on Kwai Chung'
        },
        {
            name:'星期五 晚上 葵涌',
            description:'This is a fun game course on Kwai Chung'
        }
    ]).returning("id");

    const [{id:lessonId1}, {id:lessonId2}, {id:lessonId3}, {id:lessonId4}, {id:lessonId5}, {id:lessonId6}] = await knex('course_lessons').insert([
        {
            course_id:coursesId1,
            lesson_date:'2024-01-01',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            course_id:coursesId1,
            lesson_date:'2025-01-01',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            course_id:coursesId1,
            lesson_date:'2025-01-08',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'城門谷五人場'
        },
        {
            course_id:coursesId2,
            lesson_date:'2025-01-07',
            start_time:'18:00:00',
            end_time:'20:00:00',
            venue:'沙咀道遊樂場'
        },
        {
            course_id:coursesId3,
            lesson_date:'2025-01-07',
            start_time:'09:00:00',
            end_time:'11:00:00',
            venue:'坑坪街遊樂場'
        },
        {
            course_id:coursesId4,
            lesson_date:'2025-01-13',
            start_time:'19:00:00',
            end_time:'21:00:00',
            venue:'坑坪街遊樂場'
        },
    ]).returning("id");


    await knex('enrollments').insert([
        {
            student_id:studentId1,
            course_id:coursesId1
        },
        {
            student_id:studentId2,
            course_id:coursesId2
        },
        {
            student_id:studentId3,
            course_id:coursesId3
        }
    ])

    await knex('reschedule_assignments').insert([
        {
            student_id:studentId1,
            original_lesson_id:lessonId3,
            new_lesson_id:lessonId6,
            reason:'sick'
        }
    ])

    await knex('attendance_records').insert([
        {
            student_id:studentId1,
            lesson_id:lessonId1,
        },
        {
            student_id:studentId1,
            lesson_id:lessonId2,
        },
        {
            student_id:studentId1,
            lesson_id:lessonId3,
        },
        {
            student_id:studentId2,
            lesson_id:lessonId4,
        },
        {
            student_id:studentId3,
            lesson_id:lessonId1,
        },
        {
            student_id:studentId3,
            lesson_id:lessonId2,
        },
        {
            student_id:studentId3,
            lesson_id:lessonId3,
        },
    ])

};

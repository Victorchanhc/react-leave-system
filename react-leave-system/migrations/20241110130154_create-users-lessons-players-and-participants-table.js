const { table } = require("console");
const { arrayBuffer } = require("node:stream/consumers");


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("users",table=>{
    table.increments()
    table.text("username")
    table.text("phone")
    table.text("email").notNullable()
    table.text("password").notNullable()
    table.text("role").notNullable().defaultTo("PARENT")
    table.timestamps(false,true)
  })
  
  await knex.schema.createTable("students",table=>{
    table.increments()
    table.text("english_name").notNullable()
    table.text("nick_name").notNullable()
    table.text("chinese_name")
    table.date("date_of_birth").notNullable()
    table.text("gender").notNullable()
    table.integer("user_id").notNullable().references("users.id").onDelete("CASCADE")
    table.timestamps(false,true)
    table.unique(["english_name","user_id"])

  })

  await knex.schema.createTable("courses",table=>{
    table.increments()
    table.text("name").notNullable()
    table.text("description")
    table.timestamps(false,true)
  })

  await knex.schema.createTable("course_lessons",table=>{
    table.increments()
    table.integer("course_id").notNullable().references("courses.id").onDelete("CASCADE")
    table.date("lesson_date").notNullable()
    table.time("start_time").notNullable()
    table.time("end_time").notNullable()
    table.text("venue").notNullable()
    table.unique(["course_id","lesson_date"])
    table.boolean("is_canceled").defaultTo(false)
    table.text("canceled_reason")
    table.timestamps("canceled_at")
  })

  await knex.schema.createTable("enrollments",table=>{
    table.increments()
    table.integer('student_id').notNullable().references('students.id').onDelete("CASCADE")
    table.integer('course_id').notNullable().references('courses.id').onDelete("CASCADE")
    table.boolean("is_paid").defaultTo(false)
    table.timestamps(false,true)
    table.unique(["student_id","course_id"])
  })

  await knex.schema.createTable("reschedule_assignments",table=>{
    table.increments()
    table.integer("student_id").notNullable().references("students.id").onDelete("CASCADE")
    table.integer("original_lesson_id").notNullable().references("course_lessons.id").onDelete("CASCADE")
    table.integer("new_lesson_id").references("course_lessons.id").onDelete(null)
    table.text("reason")
    table.text("status").defaultTo("PENDING")
    table.timestamps(false,true)
    table.unique(["student_id","original_lesson_id"])
  })

  await knex.schema.createTable("attendance_records",table=>{
    table.increments()
    table.integer('student_id').notNullable().references('students.id').onDelete("CASCADE")
    table.integer('lesson_id').notNullable().references('course_lessons.id').onDelete("CASCADE")
    table.boolean("attended").notNullable().defaultTo(false)
    table.boolean("rescheduled").notNullable().defaultTo(false)
    table.timestamps(false,true)
    table.unique(["student_id","lesson_id"])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable("attendance_records")
  await knex.schema.dropTable("reschedule_assignments")
  await knex.schema.dropTable("enrollments")
  await knex.schema.dropTable("course_lessons")
  await knex.schema.dropTable("courses")
  await knex.schema.dropTable("students")
  await knex.schema.dropTable("users")
};

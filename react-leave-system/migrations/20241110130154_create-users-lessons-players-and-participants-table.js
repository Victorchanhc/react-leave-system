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

  await knex.schema.createTable("lessons",table=>{
    table.increments()
    table.text("lesson_name").notNullable()
    table.text("date").notNullable()
    table.time("start_time").notNullable()
    table.time("end_time").notNullable()
    table.text("venue").notNullable()
    table.timestamps(false,true)
  })

  await knex.schema.createTable("players",table=>{
    table.increments()
    table.text("english_name").notNullable()
    table.text("nick_name").notNullable()
    table.text("chinese_name")
    table.text("date_of_birth").notNullable()
    table.text("gender").notNullable()
    table.integer("parent_id").notNullable().unsigned()
    table
        .foreign("parent_id")
        .references('users.id')
    table.timestamps(false,true)
  })

  await knex.schema.createTable("participants",table=>{
    table.increments()
    table.integer('player_id').notNullable()
    table
        .foreign('player_id')
        .references('players.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    table.integer('lesson_id').notNullable()
    table
        .foreign('lesson_id')
        .references('lessons.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    table.integer('request_lesson_id')
    table
        .foreign('request_lesson_id')
        .references('lessons.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    table.text("reason")
    table.text("status").notNullable().defaultTo("DEFAULT")
    table.boolean("attendant").defaultTo(false)
    table.timestamps(false,true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable("participants")
  await knex.schema.dropTable("players")
  await knex.schema.dropTable("lessons")
  await knex.schema.dropTable("users")
};

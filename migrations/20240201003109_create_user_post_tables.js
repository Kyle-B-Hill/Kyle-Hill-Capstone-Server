/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .createTable("user", (table) => {
        table.increments("id").primary();
        table.string("user_name").notNullable();
        table.string("password").notNullable();
        table.string("email").notNullable();
        table.string("city").notNullable();
        table.string("gender").notNullable();
        table.string("bio").notNullable();
        table.string("age").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      })
      .createTable("enjoys", (table) => {
        table.increments("id").primary();
        table
          .integer("user_id")
          .unsigned()
          .references("user.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.string("activity_name").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      })
      .createTable("palominos", (table) => {
        table.increments("id").primary();
        table
          .integer("user_id")
          .unsigned()
          .references("user.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .integer("palominos_id")
          .unsigned()
          .references("user.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("user").dropTable("enjoys").dropTable("palominos");
  };
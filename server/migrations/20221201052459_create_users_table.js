/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id").primary();
    table.string("email").notNullable();
    table.string("name").notNullable();
    table.string("avatar");
    table.string("age");
    table.string("gender");
    table.string("city");
    table.string("prompt1");
    table.string("prompt2");
    table.string("prompt3");
    table.string("fb");
    table.string("ig");
    table.string("tt");
    table.json("info");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

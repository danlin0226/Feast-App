/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary();
    table.string("email").notNullable();
    table.string("name");
    table.text("about");
    table.string("avatar");
    table.string("age");
    table.string("gender");
    table.string("city");
    table.text("prompt1");
    table.text("prompt2");
    table.text("prompt3");
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

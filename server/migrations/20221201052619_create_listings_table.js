/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("listings", (table) => {
    table.uuid("id").primary();
    table
      .uuid("user_id")
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.string("location").notNullable();
    table.string("time").notNullable();
    table.string("about").notNullable();
    table.integer("spots").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("listings");
};

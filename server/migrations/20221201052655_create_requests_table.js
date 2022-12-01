/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("requests", (table) => {
    table.uuid("id").primary();
    table
      .uuid("listing_id")
      .references("listings.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .uuid("user_id")
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("prompt1").notNullable();
    table.string("prompt2").notNullable();
    table.string("status").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("requests");
};

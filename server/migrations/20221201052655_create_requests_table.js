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
    table.text("prompt1").notNullable();
    table.text("prompt2").notNullable();
    table.text("prompt3").notNullable();
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

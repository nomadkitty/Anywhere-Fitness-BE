exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl.string("email", 128).unique();
      tbl.string("first_name", 128);
      tbl.string("last_name", 128);
      tbl
        .boolean("isInstructor")
        .defaultTo(false)
        .notNullable();
      tbl.timestamps(true, true);
    })
    .createTable("categories", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl.timestamps(true, true);
    })
    .createTable("classes", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("date").notNullable();
      tbl.string("start_time").notNullable();
      tbl.string("duration").notNullable();
      tbl.string("intensity_level");
      tbl.string("location");
      tbl
        .integer("max_class_size")
        .unsigned()
        .defaultTo(0);
      tbl.string("description", 256);
      tbl
        .integer("category_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("instructor_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("client_class", tbl => {
      tbl.boolean("attended").defaultTo(false);
      tbl.boolean("sign_up").defaultTo(false);
      tbl
        .integer("client_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("class_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.primary(["client_id", "class_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("client_class")
    .dropTableIfExists("classes")
    .dropTableIfExists("categories")
    .dropTableIfExists("users");
};

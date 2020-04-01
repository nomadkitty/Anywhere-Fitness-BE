exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { name: "Yoga" },
        { name: "Pilates" },
        { name: "Zumba" },
        { name: "Barr" },
        { name: "Running" },
        { name: "Cycling" },
      ]);
    });
};

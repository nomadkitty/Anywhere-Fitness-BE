exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("client_class")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("client_class").insert([
        {
          client_id: 3,
          class_id: 1,
          sign_up: true,
          attended: false,
        },
        {
          client_id: 3,
          class_id: 2,
          sign_up: true,
          attended: true,
        },
      ]);
    });
};

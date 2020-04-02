exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("classes").insert([
        {
          name: "Yoga for beginners",
          date: "2020-04-05",
          start_time: "9am PST",
          duration: "60 minutes",
          intensity_level: "easy",
          location: "remote",
          max_class_size: 20,
          description: "Yoga for beginners",
          category_id: 1,
          instructor_id: 1,
        },
        {
          name: "Medium level Pilates",
          date: "2020-04-01",
          start_time: "2pm PST",
          duration: "30 minutes",
          intensity_level: "medium",
          location: "remote",
          max_class_size: 15,
          description: "Medium level Pilates",
          category_id: 2,
          instructor_id: 2,
        },
      ]);
    });
};

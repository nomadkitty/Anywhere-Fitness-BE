exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "tester1",
          password: "123456",
          email: "tester1@anywherefitness.com",
          first_name: "Mia",
          last_name: "Park",
          isInstructor: true,
        },
        {
          username: "tester2",
          password: "123456",
          email: "tester2@anywherefitness.com",
          first_name: "Patrick",
          last_name: "Walter",
          isInstructor: true,
        },
        {
          username: "tester3",
          password: "123456",
          email: "tester3@yahoo.com",
          first_name: "Betty",
          last_name: "Gordon",
          isInstructor: false,
        },
      ]);
    });
};

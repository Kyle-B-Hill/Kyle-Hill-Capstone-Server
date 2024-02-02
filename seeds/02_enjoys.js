/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('enjoys').del();
    await knex('enjoys').insert([
      {
        id: 1,
        user_id: 1,
        activity_name: "tennis"
      },
      {
        id: 2,
        user_id: 1,
        activity_name: "badminton"
      },
      {
        id: 3,
        user_id: 1,
        activity_name: "soccer"
      },
      {
        id: 4,
        user_id: 2,
        activity_name: "tennis"
      },
      {
        id: 5,
        user_id: 2,
        activity_name: "badminton"
      },
      {
        id: 6,
        user_id: 2,
        activity_name: "soccer"
      },
      {
        id: 7,
        user_id: 3,
        activity_name: "tennis"
      },
      {
        id: 8,
        user_id: 3,
        activity_name: "basketball"
      },
      {
        id: 9,
        user_id: 3,
        activity_name: "running"
      },
      {
        id: 10,
        user_id: 4,
        activity_name: "badminton"
      },
      {
        id: 11,
        user_id: 4,
        activity_name: "basketball"
      },
      {
        id: 12,
        user_id: 4,
        activity_name: "running"
      },
      {
        id: 13,
        user_id: 5,
        activity_name: "climbing"
      },
      {
        id: 14,
        user_id: 5,
        activity_name: "basketball"
      },
      {
        id: 15,
        user_id: 5,
        activity_name: "running"
      },
      {
        id: 16,
        user_id: 6,
        activity_name: "running"
      },
      {
        id: 17,
        user_id: 6,
        activity_name: "soccer"
      },
      {
        id: 18,
        user_id: 6,
        activity_name: "lacrosse"
      },
      {
        id: 19,
        user_id: 7,
        activity_name: "running"
      },
      {
        id: 20,
        user_id: 7,
        activity_name: "badminton"
      },
      {
        id: 21,
        user_id: 7,
        activity_name: "climbing"
      },
      {
        id: 22,
        user_id: 8,
        activity_name: "tennis"
      },
      {
        id: 23,
        user_id: 8,
        activity_name: "badminton"
      },
      {
        id: 24,
        user_id: 8,
        activity_name: "climbing"
      },
      {
        id: 25,
        user_id: 9,
        activity_name: "tennis"
      },
      {
        id: 26,
        user_id: 9,
        activity_name: "walking"
      },
      {
        id: 27,
        user_id: 9,
        activity_name: "yoga"
      },
      {
        id: 28,
        user_id: 10,
        activity_name: "yoga"
      },
      {
        id: 29,
        user_id: 10,
        activity_name: "running"
      },
      {
        id: 30,
        user_id: 10,
        activity_name: "walking"
      },
      
    ]);
};


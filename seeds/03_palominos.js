/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('palominos').del();
    await knex('palominos').insert([
        {
          id: 1,
          user_id: 1,
          palominos_id: 2,
        },
        {
          id: 2,
          user_id: 1,
          palominos_id: 3,
        },
        {
          id: 3,
          user_id: 1,
          palominos_id: 4,
        },
    ]);
}


    
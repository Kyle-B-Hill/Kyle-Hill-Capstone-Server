/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('posts').del();
    await knex('posts').insert([
      {
        id: 1,
        user_id: 1,
        item_name: 'Television',
        description:
          'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
        category: 'Electronics',
        status: 'In Stock',
        quantity: 500,
      },
    ]);
};
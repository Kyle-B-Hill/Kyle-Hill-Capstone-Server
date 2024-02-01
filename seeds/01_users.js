/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
      {
        id: 1,
        user_name: 'Manhattan',
        city: 'New York',
        country: 'USA',
        contact_name: 'Parmin Aujla',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'paujla@instock.com',
      },
    ]);
  };
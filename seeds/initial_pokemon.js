
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokedata').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokedata').insert([
        {id: 1, name: 'missingno', type: 'None', dex_number: 999, img_link:'Nunya' }
      ]);
    });
};

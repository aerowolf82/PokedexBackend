
exports.up = function(knex) {
    return knex.schema.createTable('pokedata', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('name');
        table.string('type');
        table.integer('dex_number');
        table.integer('hp');
        table.integer('attack');
        table.integer('defense');
        table.integer('special_attack');
        table.integer('special_defense');
        table.integer('speed');
        table.string('img_link');
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pokedata');
};

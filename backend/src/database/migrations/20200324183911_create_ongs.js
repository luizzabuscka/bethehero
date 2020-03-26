
exports.up = function (knex, Promisse) {
  return Promise.all([
    knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    })
  ]);
};

exports.down = function (knex) {
  knex.schema.dropTable('ongs');
};

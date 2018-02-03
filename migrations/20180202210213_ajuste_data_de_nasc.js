exports.up = function(knex, Promise) {
    return knex.schema.table('pessoas', function(t) {
        t.timestamp('nascimento').notNullable().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('pessoas', function(t) {
        t.dropColumn('nascimento');
    });
};
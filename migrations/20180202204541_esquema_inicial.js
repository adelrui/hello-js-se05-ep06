// migrations/20180130141837_esquema_inicial.js
exports.up = knex => knex.schema.createTable("pessoas", tb => {
    tb.increments("id")
    tb.string("nome").notNullable()
    tb.string("telefone")
    tb.timestamp("datacriacao").notNullable().defaultTo(knex.fn.now())
})

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("pessoas")
};
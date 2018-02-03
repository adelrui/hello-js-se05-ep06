const mah = [
    { nome: "Aline", telefone: "92178398", nascimento: 2000-03-01},
    { nome: "Julia", telefone: "987691903", nascimento: 1987-07-09},
    { nome: "Carla", telefone: "98973631", nascimento: 1985-03-18},
    { nome: "Ana", telefone: "987763912", nascimento: 1987-12-22},
    { nome: "AI dentro", telefone: "39973691", nascimento: 1986-6-01}
  ]
  
  exports.up = knex => knex("pessoas").insert(mah)
  
  exports.down = knex => knex("pessoas").del()
    .whereIn("id", mah.map(e => e.id))
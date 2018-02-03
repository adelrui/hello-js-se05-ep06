// index.js
const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public"))

app.use(morgan("dev"))
app.use(bodyParser.json())

app.get("/listpessoas", (req, res) => {
  knex("pessoas").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.get("/pessoas/:id", (req, res) => {
    let id = req.params.id
    knex("pessoas").select().where('id', id).then(ret => {
      res.send(ret)
    }).catch(err => {
      res.status(500).send(err) 
      console.log(err)
    })
})

app.post("/pessoaadd",(req, res) => {
    let pessoanova = req.body
    knex("pessoas").insert(pessoanova, "id").then(ret => {
        res.send(ret)
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    }) 
})

app.put("/update",(req, res) => {
    let pessoaup = req.body
    knex("pessoas").update(pessoaup).where("id", pessoaup.id).then(ret => {
        res.send(ret)
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    }) 
})

app.delete("/vaiteembora/:id",(req, res) => {
    let id = req.params.id
    knex("pessoas").del(pessoaup).where("id", id).then(ret => {
        res.send(ret)
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    }) 
})

knex.migrate.latest().then(_ =>
  app.listen(3000, _ =>
    console.log("server online!")))
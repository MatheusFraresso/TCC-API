require("dotenv").config()
const express = require("express")
const {
  create,
  read,
  update,
  remove,
} = require("./src/controllers/Mongo/PacientController")

const app = express()
app.use(express.json())
var port = 3001

app.listen(process.env.PORT || port, () => {
  console.log("Server is up and running on port " + port)
})

app.post("/pacient", (req, res) => create(req, res))
app.get("/pacient/:id", (req, res) => read(req, res))
app.patch("/pacient/:id", (req, res) => update(req, res))
app.delete("/pacient/:id", (req, res) => remove(req, res))

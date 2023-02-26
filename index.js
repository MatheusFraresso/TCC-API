require("dotenv").config()
const express = require("express")

const app = express()
app.use(express.json())
var port = 3001

app.listen(process.env.PORT || port, () => {
  console.log("Server is up and running on port " + port)
})

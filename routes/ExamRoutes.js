const express = require("express")
const routes = express.Router()
const mongoController = require("../controllers/mongo/PatientController")
const sqlController = require("../controllers/sql/PatientController")

// SQL routes
routes.post("/sql/create", mongoController.create)
routes.post("/sql/read", mongoController.create)
routes.post("/sql/update", mongoController.create)
routes.post("/sql/delete", mongoController.create)
routes.post("/sql/all", mongoController.create)

// Mongo Routes
routes.post("/mongo/create", sqlController.create)
routes.get("/mongo/read/:id", sqlController.read)
routes.patch("/mongo/update/:id", sqlController.update)
routes.delete("/mongo/delete/:id", sqlController.delete)
routes.get("/mongo/all", sqlController.all)

module.exports = routes

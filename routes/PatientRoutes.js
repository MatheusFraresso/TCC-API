const express = require("express")
const routes = express.Router()
const mongoController = require("../controllers/mongo/PatientController")
const sqlController = require("../controllers/sql/PatientController")

// SQL routes
routes.post("/sql/create", sqlController.create)
routes.get("/sql/read/:id", sqlController.read)
routes.patch("/sql/update/:id", sqlController.update)
routes.delete("/sql/delete/:id", sqlController.delete)
routes.get("/sql/all", sqlController.all)

// Mongo Routes
routes.post("/mongo/create", mongoController.create)
routes.get("/mongo/read/:id", mongoController.read)
routes.patch("/mongo/update/:id", mongoController.update)
routes.delete("/mongo/delete/:id", mongoController.delete)
routes.get("/mongo/all", mongoController.all)

module.exports = routes

const express = require("express")
const routes = express.Router()
const controller = require("../controllers/PatientController")

// SQL routes
routes.post("/sql/create", controller.create)
routes.post("/sql/read", controller.read)
routes.post("/sql/update", controller.update)
routes.post("/sql/delete", controller.delete)
routes.post("/sql/all", controller.all)

// Mongo Routes
routes.post("/mongo/create", controller.create)
routes.get("/mongo/read/:id", controller.read)
routes.patch("/mongo/update/:id", controller.update)
routes.delete("/mongo/delete/:id", controller.delete)
routes.get("/mongo/all", controller.all)

module.exports = routes

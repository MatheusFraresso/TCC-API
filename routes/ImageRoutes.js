const express = require("express")
const routes = express.Router()
const controller = require("../controllers/ImageController")

routes.use(authMiddleware)

// SQL routes
routes.post("/sql/create", controller.create)
routes.post("/sql/read", controller.create)
routes.post("/sql/update", controller.create)
routes.post("/sql/delete", controller.create)
routes.post("/sql/all", controller.create)

// Mongo Routes
routes.post("/mongo/create", controller.create)
routes.post("/mongo/read", controller.create)
routes.post("/mongo/update", controller.create)
routes.post("/mongo/delete", controller.create)
routes.post("/mongo/all", controller.create)

module.exports = routes

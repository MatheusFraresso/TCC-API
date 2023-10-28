const mongoose = require("mongoose")
const Disease = mongoose.model("Disease")
module.exports = {
  async create(req, res) {
    try {
      if (req.body instanceof Array) {
        const result = await Disease.insertMany(req.body)
        return res
          .status(200)
          .send({ message: "Several Diseases Created", data: result })
      } else {
        const result = await Disease.create(req.body)
        return res
          .status(200)
          .send({ message: "Disease Created", data: result })
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async read(req, res) {
    try {
      const result = await Disease.findById(req.params.id)
      return res.json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async update(req, res) {
    try {
      const result = await Disease.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).send({ message: "Disease updated", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async delete(req, res) {
    try {
      const result = await Disease.findByIdAndDelete(req.params.id, req.body)
      return res.status(200).send({ message: "Disease deleted", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async all(req, res) {
    try {
      const result = await Disease.find({}).explain("executionStats")
      return res.status(200).send(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
}

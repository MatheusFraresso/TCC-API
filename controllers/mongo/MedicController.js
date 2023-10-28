const mongoose = require("mongoose")
const Medic = mongoose.model("Medic")
module.exports = {
  async create(req, res) {
    try {
      if (req.body instanceof Array) {
        const result = await Medic.insertMany(req.body)
        return res
          .status(200)
          .send({ message: "Several Medics Created", data: result })
      } else {
        const result = await Medic.create(req.body)
        return res.status(200).send({ message: "Medic Created", data: result })
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async read(req, res) {
    try {
      const result = await Medic.findById(req.params.id)
      return res.json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async update(req, res) {
    try {
      const result = await Medic.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).send({ message: "Medic updated", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async delete(req, res) {
    try {
      const result = await Medic.findByIdAndDelete(req.params.id, req.body)
      return res.status(200).send({ message: "Medic deleted", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async all(req, res) {
    try {
      const result = await Medic.find({}).explain("executionStats")
      return res.status(200).send(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
}

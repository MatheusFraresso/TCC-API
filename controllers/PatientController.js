const mongoose = require("mongoose")
const Patient = mongoose.model("Patient")
module.exports = {
  async create(req, res) {
    try {
      if (req.body instanceof Array) {
        const result = await Patient.insertMany(req.body)
        return res
          .status(200)
          .send({ message: "Several Patients Created", data: result })
      } else {
        const result = await Patient.create(req.body)
        return res
          .status(200)
          .send({ message: "Patient Created", data: result })
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async read(req, res) {
    try {
      const result = await Patient.findById(req.params.id)
      return res.json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async update(req, res) {
    try {
      const result = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).send({ message: "Patient updated", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async delete(req, res) {
    try {
      const result = await Patient.findByIdAndDelete(req.params.id, req.body)
      return res.status(200).send({ message: "Patient deleted", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async all(req, res) {
    try {
      const result = await Patient.find({}).explain("executionStats")
      return res.status(200).send(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
}

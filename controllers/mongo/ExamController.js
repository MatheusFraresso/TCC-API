const mongoose = require("mongoose")
const Exam = mongoose.model("Exam")
module.exports = {
  async create(req, res) {
    try {
      if (req.body instanceof Array) {
        const result = await Exam.insertMany(req.body)
        return res
          .status(200)
          .send({ message: "Several Exams Created", data: result })
      } else {
        const result = await Exam.create(req.body)
        return res.status(200).send({ message: "Exam Created", data: result })
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async read(req, res) {
    try {
      const result = await Exam.findById(req.params.id)
      return res.json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async update(req, res) {
    try {
      const result = await Exam.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).send({ message: "Exam updated", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async delete(req, res) {
    try {
      const result = await Exam.findByIdAndDelete(req.params.id, req.body)
      return res.status(200).send({ message: "Exam deleted", data: result })
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  async all(req, res) {
    try {
      const result = await Exam.find({}).explain("executionStats")
      return res.status(200).send(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
}

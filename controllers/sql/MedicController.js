const {
  insertQuery,
  selectQuery,
  updateQuery,
  deleteQuery,
} = require("./utils")

const sql = global.sql

const table = "medic"

module.exports = {
  async create(req, res) {
    try {
      const query = insertQuery(table, req.body)
      const result = await global.sql.query(query)
      return res.json(result)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error.message)
    }
  },
  async read(req, res) {
    try {
      const query = selectQuery(table, req.params.id)
      const result = await global.sql.query(query)
      return res.json(result.rows)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  },
  async update(req, res) {
    try {
      const query = updateQuery(table, req.params.id, req.body)
      const result = await global.sql.query(query)
      return res.status(200).send({ message: "Medic updated", data: result })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  },
  async delete(req, res) {
    try {
      const query = deleteQuery(table, req.params.id)
      const result = await global.sql.query(query)
      return res.status(200).send({ message: "Medic deleted", data: result })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  },
  async all(req, res) {
    try {
      const result = await global.sql.query("select * from" + table)

      return res.status(200).send(result.rows)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  },
}

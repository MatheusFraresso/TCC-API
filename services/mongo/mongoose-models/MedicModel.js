const mongoose = require("mongoose")

const MedicSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  crm: {
    type: String,
    required: true,
  },
  especialidade: {
    type: String,
    required: true,
  },
})

mongoose.model("Medic", MedicSchema)

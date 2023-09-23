const mongoose = require("mongoose")

const PatientSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  foto: {
    data: Buffer,
    contentType: String,
  },
  cpf: {
    type: String,
    required: true,
  },
  rg: {
    type: String,
    required: true,
  },
  nascimento: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contato: {
    nome: { type: String },
    telefone: { type: String },
    email: { type: String },
  },
})

mongoose.model("Patient", PatientSchema)

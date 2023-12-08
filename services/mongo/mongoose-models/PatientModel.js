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
  nome_contato: { type: String },
  telefone_contato: { type: String },
  email_contato: { type: String },
})

mongoose.model("Patient", PatientSchema)

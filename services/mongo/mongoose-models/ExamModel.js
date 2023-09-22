const mongoose = require("mongoose")

const ExamSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  resultado: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente",
    required: true,
  },
  medico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Medico",
    required: true,
  },
  imagens: [{ arquivo: { data: Buffer, contentType: String } }],
})

mongoose.model("Exam", ExamSchema)

const mongoose = require("mongoose")

const DiseasePacientModel = new mongoose.Schema({
  data_descoberta: {
    type: Date,
    required: true,
    default: new Date(),
  },
  doenca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Disease",
    required: true,
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pacient",
    required: true,
  },
})

mongoose.model("DiseasePacient", DiseasePacientModel)

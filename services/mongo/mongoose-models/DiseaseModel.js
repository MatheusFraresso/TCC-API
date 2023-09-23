const mongoose = require("mongoose")

const DiseaseModel = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  sintomas: {
    type: String,
    required: true,
  },
})

mongoose.model("Disease", DiseaseModel)

require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

require("./services/mongo/mongoose-models")
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

var port = 3001

app.use("/api/disease", require("./routes/DiseaseRoutes"))
app.use("/api/exam", require("./routes/ExamRoutes"))
app.use("/api/medic", require("./routes/MedicRoutes"))
app.use("/api/patient", require("./routes/PatientRoutes"))

app.listen(process.env.PORT || port, () => {
  console.log("Server is up and running on port " + port)
})

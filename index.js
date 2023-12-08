require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const { sqlConnect } = require("./services/sql/connection")
const app = express()
app.use(express.json())

require("./services/mongo/mongoose-models")

mongoose.set("strictQuery", true)

// Database connections
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {})

sqlConnect()

// Routes
app.use("/api/disease", require("./routes/DiseaseRoutes"))
app.use("/api/exam", require("./routes/ExamRoutes"))
app.use("/api/medic", require("./routes/MedicRoutes"))
app.use("/api/patient", require("./routes/PatientRoutes"))

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is up and running on port " + process.env.PORT)
})

require("dotenv").config()
const express = require("express")

const app = express()
app.use(express.json())

var port = 3001

app.use("/api/disease", require("./routes/DiseaseRoutes"))
app.use("/api/exam", require("./routes/ExamRoutes"))
app.use("/api/medic", require("./routes/MedicRoutes"))
app.use("/api/patient", require("./routes/PatientRoutes"))

app.listen(process.env.PORT || port, () => {
  console.log("Server is up and running on port " + port)
})

const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const app = express()
const PORT = 4000
const mongoProfile = require('./config')
const authRouter = require('./authRouter')

app.use(cors());
app.use(express.json())
app.use('/auth',authRouter)


app.get('/test', (req, res) => {
  res.json({msg:'test'})
})
const start = async () =>{
  try {
    await mongoose.connect(mongoProfile)
    app.listen(PORT, () => {
      console.log(`Server app listening at http://localhost:${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start();
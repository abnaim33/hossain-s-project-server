const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const userRoute = require('./routes/userRoutes')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api', userRoute)


mongoose.connect(process.env.DB_URL)
    .then(() => console.log('database connected'))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(process.env.PORT || 5000, () => console.log('server is running'))


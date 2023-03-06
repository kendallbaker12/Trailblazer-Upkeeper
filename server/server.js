require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const buildings = require('./routes/buildings')
const rooms = require('./routes/rooms')

// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/buildings', buildings)
app.use('/buildings', rooms)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error, "error here bruv")
    })



require('dotenv').config()

const express = require('express')


// express app
const app = express()

//routes
app.get('/', (req, response) => {
    response.json({ mssg: 'Welcome to the app' })
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
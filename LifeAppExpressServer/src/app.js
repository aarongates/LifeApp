console.log('hello world from <server folder>/app.js')

// express is the web server
const express = require('express')
// body parser makes reading JSON objects easier
const bodyParser = require('body-parser')
// cors allows cross site scripting
const cors = require('cors')
// morgan logs all API requests
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! You're now registered!`
  })
})

app.listen(process.env.PORT || 8081)

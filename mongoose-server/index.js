'use strict';

require('dotenv').config()
const express = require('express')
const app = express()
const port = process,env,PORT || 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes')
const cors = require('./cors')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/customer-log', {useNewUrlParser: true})
mongoose.set('useFindAndModify', false)

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

cors(app)
routes(app)

app.listen(port)
console.log('customers database server is running on port ${port}')

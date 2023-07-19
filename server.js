require('dotenv').config()
const router = require('./router.js')
const cors = require('cors')
const express = require('express')
const app = express()
const process = require('process');
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(router) 
 
app.listen(port, () => {
    console.log(`Running with port ${port}`);
})
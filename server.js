require('dotenv').config()

const express = require('express')
const app  = express()



app.listen(process.env.PORT, () => {
    console.log(`server run in port:`, process.env.PORT)
})
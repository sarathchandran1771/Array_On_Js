const bodyParser = require('body-parser')
const express = require('express')
const jwt = require('jsonwebtoken') 
const app = express()
const PORT = 3005

app.use(bodyParser.json())

const payLoad = {
    userId:'123456'
}

const secretKey  = 'aaaaaaaa'

app.post('/generateToken',(req,res)=>{
    const token = jwt.sign(payLoad,secretKey)
    console.log(token)
    res.json({token})
})

app.listen(PORT,()=>{
    console.log(`server runnging http://localhost:${PORT}`)
})
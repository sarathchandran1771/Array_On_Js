const express = require('express');
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken')

const port = 3000

const app = express()
app.use(bodyparser.json())


const urlMiddileware = (req,res,next)=>{

    console.log(req.url)
    console.log(req.method)

    next()
}

app.use(urlMiddileware)

app.post('/generateToken',(req,res)=>{
    const {userId,username} = req.body
    console.log(req.body)
    const payload = {
        userId:userId,
        username:username
    }

    const secretKey = '123456789'

    const token = jwt.sign(payload,secretKey)

    if(token){
        res.json(token)
    }
    
})

app.post('/sum',(req,res)=>{
    const {a,b} = req.body

    const sum = parseFloat(a) + parseFloat(b)
    res.json({ sum });
})

app.listen(port,()=>{
    console.log(`server running http://localhost:${port}`)
})



const fs = require('fs');
// Define the file path
const filePath = './helo.txt';

let contentToAdd = 'heloo world'
// // Write to a file
fs.writeFile(filePath, 'Hello, this is some content!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Content successfully written to file!');
});

// Read from a file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

fs.appendFile(filePath,contentToAdd,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('done sucessfully');
})

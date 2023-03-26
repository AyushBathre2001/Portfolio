require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')
const sendMail = require('./controllers/mailControl')

const app = express()

app.use(express.static('./public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.sendFile('./public/index.html')
})

app.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    sendMail(name,email,message)
    res.send("Mail has been sent")

});
app.listen(3000,()=>{
    console.log("Server is running")
})
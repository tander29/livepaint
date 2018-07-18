const express = require("express")
const port = 3000
const app = express()

const globalUpdates = []

app.use(express.static('public'))
app.use(express.json())

// Fill in your request handlers here
app.post('/updates', (req, res) => { 
    if (req.body.clientupdates.length){
    globalUpdates.push(req.body.clientupdates)
    }
    console.log(globalUpdates)
    res.send({globalUpdates: globalUpdates});
    
})

app.listen(port)
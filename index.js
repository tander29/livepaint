const express = require("express")
const port = 3000
const app = express()

const globalUpdates = []
let sendBackNumber = 0;
app.use(express.static('public'))
app.use(express.json())

// Fill in your request handlers here
app.post('/updates', (req, res) => {

    if (req.body.clientUpdates.length) {
        req.body.clientUpdates.forEach(element => {
            globalUpdates.push(element)
        });
    }

    if (req.body.clientUpdateCount === 0) {
        res.send({ globalUpdates: globalUpdates });
    } else if (globalUpdates.length > req.body.clientUpdateCount) {
        sendBackNumber = globalUpdates.length - req.body.clientUpdateCount
        console.log('global updates.length', globalUpdates.length)
        console.log('client updates', req.body.clientUpdateCount)
        console.log('send back number', sendBackNumber)
        let sendBackArray = globalUpdates.slice(-sendBackNumber)
        res.send({ globalUpdates: sendBackArray })
    }
    // console.log(globalUpdates)

})



app.listen(port)
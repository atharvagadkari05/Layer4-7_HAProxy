const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/*', (req,res) =>{
    res.send(`Listening at ${port}`)
})

app.listen(port, ()=>{
    console.log(`Listening at ${port}`)
})
const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.send("Welcome to my awesome app")
})

app.listen(5000, function() {
    console.log("app listening on port 5000")
})
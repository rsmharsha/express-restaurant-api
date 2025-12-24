const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.json({ "greeting": "Hello" })
})

const port = 1404
app.listen(port, () => {
    console.log(`listening on the port ${port}`);
})
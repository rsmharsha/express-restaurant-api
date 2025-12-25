import express from "express"
import { apiRouter } from "./routes/apiRoutes.js"
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/api/v1/restaurants', apiRouter)
app.use((req, res) => {
    res.status(404).json({ message: "Oops! We couldn't find what you were looking for. Please check API documentaion" })
})

const port = 1404
app.listen(port, () => {
    console.log(`listening on the port ${port}`);
})
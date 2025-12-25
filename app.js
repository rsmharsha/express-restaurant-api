import express from "express"
import cors from 'cors'
import dotenv from "dotenv";
import { apiRouter } from "./routes/apiRoutes.js"
import { apiLimiter } from "./middlewares/rateLimiter.js"

dotenv.config();


const app = express()

app.use(cors())

app.use('/api/v1/restaurants', apiLimiter, apiRouter)
app.use((req, res) => {
    res.status(404).json({ message: "Oops! We couldn't find what you were looking for. Please check API documentaion" })
})

const port = process.env.PORT || 1404
app.listen(port, () => {
    console.log(`listening on the port ${port}`);
})
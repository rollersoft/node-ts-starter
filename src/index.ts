import { config as configEnv } from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

configEnv()

const app = express()

const port = process.env.NODE_ENV === 'development' ? 4000 : process.env.API_PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routes here

// error handling middleware here

// start the Express server
app.listen(port, () => {
  console.log(`API started at http://localhost:${port}`)
})

module.exports = app

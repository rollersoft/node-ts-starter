import { config as configEnv } from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './router'

configEnv()

export const app = express()

const port = process.env.NODE_ENV === 'development' ? 4000 : process.env.API_PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routes
app.use(router)

// error handling middleware
app.use((e, req, res, next) => {
  res.status(400).json({ error: e })
})

// start the Express server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`API started at http://localhost:${port}`)
  })
}

import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import pool from './db/connection'
import userRoutes from './routes/userRoutes'

const app: Express = express()
const port = 3000

// Middleware
app.use(cors({
  origin: /^https?:\/\/localhost:\d+$/, // Allow any localhost port
  credentials: true
}))
app.use(express.json())

// Routes
app.use('/auth', userRoutes)

app.get('/', async (req:Request, res:Response) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time')
    // Init user table
    // await pool.query(`
    //   CREATE TABLE IF NOT EXISTS users (
    //   id SERIAL PRIMARY KEY,
    //   email VARCHAR(255) UNIQUE NOT NULL,
    //   password VARCHAR(255) NOT NULL,
    //   role VARCHAR(15) DEFAULT 'USER',
    //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    // )
    //   `)
    res.json({
      message: 'Auth service: database connection success!',
      currentTime: result.rows[0].current_time
    })
  } catch (error) {
    console.error('Database connection error:', error)
    res.status(500).json({
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

app.listen(port, () => {
  console.log(`Auth service listening on port ${port}`)
})
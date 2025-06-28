import  express, { Express, Request, Response } from 'express' 
import pool from './db/connection'

const app:Express = express()
const port = 3000

app.get('/', async (req:Request, res:Response) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time')
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
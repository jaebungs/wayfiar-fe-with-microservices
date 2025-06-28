import { Pool, PoolConfig } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const dbConfig: PoolConfig = {
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'wayfair_auth',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5433'),
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
}

const pool = new Pool(dbConfig)

// Test the connection
pool.on('connect', () => {
  console.log('Auth service: Connected to PostgreSQL database')
})

pool.on('error', (err) => {
  console.error('Auth service: Unexpected error on idle client', err)
  process.exit(-1)
})

export default pool 
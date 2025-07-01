import pool from './connection'
import PasswordHash from '@/services/passwordHash'

interface CreateUserData {
    email: string
    password: string
    role: string
}

interface User {
    id: number
    email: string
    role: string
    created_at: Date
    updated_at: Date
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const query = 'SELECT * FROM users WHERE email = $1'
    const result = await pool.query(query, [email])
    return result.rows[0] || null
}

export async function createUser(userData: CreateUserData): Promise<User> {
    const { email, password, role } = userData
    const hashedPassword = await PasswordHash.hashPassword(password)
    const query = `
        INSERT INTO users (email, password, role)
        VALUES ($1, $2, $3)
        RETURNING id, email, role, created_at, updated_at
    `

    const result = await pool.query(query, [email, hashedPassword, role])

    return result.rows[0]
}

export async function signInUser(email: string, password: string): Promise<User | null> {
    const query = `SELECT * FROM users WHERE email = $1`
    const result = await pool.query(query, [email])
    const user = result.rows[0]

    if (!user) return null

    const isPasswordMatch = await PasswordHash.comparePassword(password, user.password)
    if (!isPasswordMatch) return null
    
    return { id: user.id, email: user.email, role: user.role, created_at: user.created_at, updated_at: user.updated_at}
}
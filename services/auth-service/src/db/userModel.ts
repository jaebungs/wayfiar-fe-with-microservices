import pool from './connection'

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
    
    const query = `
        INSERT INTO users (email, password, role)
        VALUES ($1, $2, $3)
        RETURNING id, email, role, created_at, updated_at
    `
    const result = await pool.query(query, [email, password, role])
    return result.rows[0]
}
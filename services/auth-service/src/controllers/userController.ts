import { Request, Response } from 'express'
import { createUser, findUserByEmail } from '../db/userModel'

export async function signUpUser(req: Request, res: Response) {
    try {
        const { email, password, role = 'User' } = req.body

        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are requried.'
            })
        }

        // check email already exists
        const existingUser = await findUserByEmail(email)

        if (existingUser) {
            return res.status(409).json({
                error: 'User with this email already exists'
            })
        }

        const newUser = await createUser({ email, password, role })

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                role: newUser.role,
                created_at: newUser.created_at
            }
        })
    } catch (error) {
        console.log('Sign up error:', error)
        res.status(500).json({
            error: 'Internal server error during sign up'
        })
    }
}
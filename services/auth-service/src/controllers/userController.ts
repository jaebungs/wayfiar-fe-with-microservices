import { Request, Response } from 'express'
import { createUser, signInUser as signInUserModel, findUserByEmail } from '../db/userModel'

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

export async function signInUser(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are requried.'
            })
        }

        const logInUser = await signInUserModel(email, password)
        
        if (!logInUser) {
            return res.status(401).json({
                error: 'Invalid email or password'
            })
        }
        return res.status(200).json({
            message: 'User signed in successfully',
            user: {
                id: logInUser.id,
                email: logInUser.email,
                role: logInUser.role,
                created_at: logInUser.created_at,
                updated_at: logInUser.updated_at
            }
        })
    } catch (error) {
        console.log('Sign in error:', error)
        res.status(500).json({
            error: 'Internal server error during sign in'
        })
    }
}

export async function checkExistEmail(req: Request, res: Response) {
    try {
        const { email } = req.query

        if (!email || typeof email != 'string') {
            return res.status(400).json({
                error: 'Email is required'
            })
        }

        const existingUser = await findUserByEmail(email)

        if (existingUser) {
            return res.status(200).json({
                exists: true,
                message: 'User with this email already exists'
            })
        } else {
            return res.status(200).json({
                exists: false,
                message: 'Email is available'
            })
        }
    } catch (error) {
        console.log('Email check error:', error)
        res.status(500).json({
            error: 'Internal server error during email check'
        })
    }
}
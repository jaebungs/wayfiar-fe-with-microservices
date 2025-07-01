const Auth_LOCAL_URL = 'http://localhost:3000'

export interface EmailCheckResponse {
    exists: boolean
    message: string
}

export interface SignUpRequest {
    email: string
    password: string
    role?: string
}

export interface SignUpResponse {
    message: string
    user: {
        id: number
        email: string
        role: string
        created_at: string
    }
}
export interface SignInResponse {
    message: string
    user: {
        id: number
        email: string
        role: string
        created_at: string,
        updated_at?: string
    }
}


export class AuthService {
    static async checkEmailExists(email: string): Promise<EmailCheckResponse> {
        try {
            const response = await fetch(`${Auth_LOCAL_URL}/auth/email?email=${encodeURIComponent(email)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error('Failed to check email exists')
            }

            return await response.json()
        } catch (error) {
            throw new Error('Network error. Please try again.')
        }
    }

    static async signUpUser(email:string, password: string, role?: string): Promise<SignUpResponse> {
        try {
            const response = await fetch(`${Auth_LOCAL_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    role: role ? role : 'User'
                })
            })
            if (!response.ok) {
                throw new Error('Failed to sign up user')
            }
            
            return await response.json()
        } catch (error) {
            throw new Error('Network error during signUpUser')
        }
    }

    static async signInUser(email: string, password: string): Promise<SignInResponse> {
        try {
            const response = await fetch(`${Auth_LOCAL_URL}/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Failed to sign in')
            }
            
            return await response.json()
        } catch (error) {
            if (error instanceof Error) {
                throw error
            }
            throw new Error('Network error during sign in')
        }
    }
}
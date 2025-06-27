import { describe, it, expect } from 'vitest'
import { validatePassword, getPasswordError, isPasswordValid } from './passwordValidation'

describe('Password Validaiton', () => {
    it('should return error when empty', () => {
        const result = validatePassword('')
        expect(result.isValid).toBe(false)
        expect(result.errorMessage).toBe('Please fill in password')
    })

    it('should return error when one upper case is missing', () => {
        const result = validatePassword('wa3423#$tawe')
        expect(result.isValid).toBe(false)
        expect(result.errorMessage).toBe('Password must contain at least one uppercase letter')
    })

    it('should return error when one special character is missing', () => {
        const result = validatePassword('3ewSET33twacg')
        expect(result.isValid).toBe(false)
        expect(result.errorMessage).toBe('Password must contain at least one special character')
    })

    it('should return error when less than 6 characters', () => {
        const result = validatePassword('ab@T5')
        expect(result.isValid).toBe(false)
        expect(result.errorMessage).toBe('Password should be at least 6 characters long')
    })

    it('should return success for valid password', () => {
        const result = validatePassword('1A2d3#4ydf^kTO40')
        expect(result.isValid).toBe(true)
        expect(result.errorMessage).toBe('')
    })

})
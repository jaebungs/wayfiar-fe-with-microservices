import { describe, it, expect } from 'vitest'
import { validateEmail, getEmailError, isEmailValid } from './validation'

describe('Email Validation',() => {
    it('should return error for empty input', () => {
        const result = validateEmail('')
        expect(result.isValid).toBe(false)
        expect(result.errorMessage).toMatch(/email is required/i)
    })

    it('should return error for invalid email format', () => {
        const result = validateEmail('awet@asdf')
        const withoutAt = validateEmail('testtset.com')
        
        expect(result.isValid).toBe(false)
        expect(result.errorMessage).toBe('Please enter a valid email address')
        expect(withoutAt.errorMessage).toBe('Please enter a valid email address')
    })

    it('should return true for valid email', () => {
        const result = validateEmail('test@testtest.com')

        expect(result.isValid).toBe(true)
        expect(result.errorMessage).toBe('')
    })

    it('should handle various email format', () => {
        const validEmails = [
            'user@domain.com',
            'user.name@domain.com',
            'user+tag@domain.co.uk',
            '123@domain.org'   
        ]

        validEmails.forEach(email => {
            const result = validateEmail(email)
            expect(result.isValid).toBe(true)
            expect(result.errorMessage).toBe('')
        })
    })
})

describe('getEmailError', () => {
    it('should return error for empty email', () => {
        expect(getEmailError('')).toBe('Email is required')
    })

    it('should return error message for invalid email', () => {
        const invalidEmails = [
            'user@domain.',
            'user.namedomain.com',
            'user+tag@domain.',
            '123@.org'
        ]

        invalidEmails.forEach(email => {
            const result = getEmailError(email)
            expect(result).toBe('Please enter a valid email address')
        })
    })

    it('should return empty string for valid email', () => {
        expect(getEmailError('test@example.com')).toBe('')
    })
})

describe('isEmailValid', () => {
    it('should return false for invalid email', () => {
        expect(isEmailValid('')).toBe(false)
        expect(isEmailValid('test@test')).toBe(false)
        expect(isEmailValid('test.com')).toBe(false)
    })

    it('should return true for valid email', () => {
        expect(isEmailValid('test@test.com')).toBe(true)
    })
})
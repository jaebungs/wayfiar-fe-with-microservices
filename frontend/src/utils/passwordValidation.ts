export interface PasswordValidationResult {
    isValid: boolean
    errorMessage: string
}

export const validatePassword = (password: string): PasswordValidationResult => {
    if (!password) {
        return {
            isValid: false,
            errorMessage: 'Please fill in password'
        }
    }

    if (password.length <= 5) {
        return {
            isValid: false,
            errorMessage: 'Password should be at least 6 characters long'
        }
    }

    if (!/[A-Z]/.test(password)) {
        return {
            isValid: false,
            errorMessage: 'Password must contain at least one uppercase letter'
        }
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        return {
            isValid: false,
            errorMessage: 'Password must contain at least one special character'
        }
    }

    return {
        isValid: true,
        errorMessage: ''
    }
}

export const getPasswordError = (password: string):string => {
    return validatePassword(password).errorMessage
}

export const isPasswordValid = (password: string):boolean => {
    return validatePassword(password).isValid
}

export const validatePasswordOnBlur = (password: string): string => {
    if (!password) {
        return '' // no error on empty password
    }
    return getPasswordError(password)
}
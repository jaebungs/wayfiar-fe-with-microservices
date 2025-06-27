/**
 * Email validation utilities
 */

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns ValidationResult with validation status and error message
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return {
      isValid: false,
      errorMessage: 'Email is required'
    };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      errorMessage: 'Please enter a valid email address'
    };
  }
  
  return {
    isValid: true,
    errorMessage: ''
  };
};

/**
 * Validates an email address and returns just the error message
 * @param email - The email address to validate
 * @returns Error message string (empty if valid)
 */
export const getEmailError = (email: string): string => {
  const result = validateEmail(email);
  return result.errorMessage;
};

/**
 * Checks if an email address is valid
 * @param email - The email address to validate
 * @returns Boolean indicating if email is valid
 */
export const isEmailValid = (email: string): boolean => {
  const result = validateEmail(email);
  return result.isValid;
};

/**
 * Validates email on blur (for real-time validation)
 * @param email - The email address to validate
 * @returns Error message string (empty if valid)
 */
export const validateEmailOnBlur = (email: string): string => {
  if (!email) {
    return ''; // Don't show error on blur if empty
  }
  return getEmailError(email);
}; 
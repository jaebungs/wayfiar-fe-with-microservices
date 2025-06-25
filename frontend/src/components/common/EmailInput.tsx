import React, { useState, forwardRef } from 'react';
import { validateEmailOnBlur } from '@/utils/validation'

interface EmailInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  className?: string;
  componentClass?: string;
  validateOnBlur?: boolean;
  showValidIcon?: boolean;
  emailError?: string;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (
    {
      label = 'Email',
      validateOnBlur = false,
      showValidIcon = true,
      emailError = '',
      className = '',
      componentClass='',
      value,
      onBlur,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
        setIsFocused(false)

        // Perform validation on blur if enabled
        if (validateOnBlur) {
          const error = validateEmailOnBlur(value as string)
        }
        
        onBlur?.(event)
    }

    function handleClear() {
        // Trigger onChange with empty value to clear the input
        const syntheticEvent = {
            target: { value: '' }
        } as React.ChangeEvent<HTMLInputElement>
        onChange?.(syntheticEvent)
        
        // Clear validation error when clearing

    }

    return (
      <div className={componentClass}>
        <div className='relative'>
            <input
                ref={ref}
                type='text'
                aria-label={label}
                value={value || ''}
                onChange={onChange}
                onBlur={handleBlur}
                className={`relative h-12 border-1 rounded-lg p-4 pr-10 ${className}`}
                {...props}
            />
            {value && (
            <button
                aria-label='clear email inputs'
                onClick={handleClear}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-3 text-black hover:text-purple-200 ${emailError ? 'text-red-500' : ''}`}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            )}
        </div>
      </div>
    );
  }
);

export default EmailInput;

import React, { useState, forwardRef } from 'react';

interface EmailInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  className?: string;
  componentClass?: string;
  validateOnBlur?: boolean;
  showValidIcon?: boolean;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (
    {
      label = 'Email',
      validateOnBlur = true,
      showValidIcon = true,
      className = '',
      componentClass='',
      onBlur,
      onChange,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setValue(event.target.value)
      console.log('value',value)
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
        setIsFocused(true)
        console.log(isFocused)
    }

    function handleClear() {
        setValue('')
    }

    return (
      <div className={componentClass}>
        <div className='relative'>
            <input
                ref={ref}
                type='email'
                aria-lable={label}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`relative h-12 border-1 rounded-lg p-4 pr-10 ${className}`}
                {...props}
            />
            {value && (
            <button
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-black hover:text-purple-200"
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

import { forwardRef, useState } from 'react'

interface PasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  className?: string
  componentClass?: string
  validateOnBlur?: boolean
  showValidIcon?: boolean
  passwordError?: string
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      label = 'Password',
      validateOnBlur = false,
      showValidIcon = true,
      passwordError = '',
      className = '',
      componentClass = '',
      value,
      onBlur,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isHidden, setIsHidden] = useState(true)

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      setIsFocused(false)

      // Perform validation on blur if enabled
      if (validateOnBlur) {
        //   const error = validateEmailOnBlur(value as string)
      }

      // onBlur?.(event)
    }

    return (
      <div className={componentClass}>
        <div className="relative">
          <input
            type="password"
            ref={ref}
            aria-label={label}
            onBlur={handleBlur}
            value={value}
            onChange={onChange}
            className={`relative h-12 border-1 rounded-lg p-4 pr-10 ${className}`}
            {...props}
          />
          <button
            className="absolute text-purple-100 underline hover:no-underline right-3 top-1/2 -translate-y-1/2 p-2"
            onClick={() => setIsHidden(!isHidden)}
          >
            {isHidden ? 'show' : 'hide'}
          </button>
        </div>
      </div>
    )
  }
)

export default PasswordInput

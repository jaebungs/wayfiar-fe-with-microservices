import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import EmailInput from '@/components/common/EmailInput'
import WayfairTextLogo from '@/assets/icons/wayfairTextLogo.svg?react'
import { getEmailError } from '@/utils/validation'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value
    setEmail(newEmail)
    
    if (emailError) {
        setEmailError('')
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('sumbit?')

    const emailValidationError = getEmailError(email)
    if (emailValidationError) {
        setEmailError(emailValidationError)
        return
    }

    setIsSubmitting(true)
  }

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-[90%] mx-auto py-8 flex justify-between border-b border-gray-100 items-center">
            <Link to="/" className="w-[210px] h-[45px] block">
              <WayfairTextLogo className="w-full h-full" />
            </Link>
            <p className='font-medium text-base'>Secure Login</p>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-1 max-w-[400px] mt-10">
            <h1 className='text-[1.5625rem] font-bold text-center'>Enter your email address to sign in or to create an account</h1>
            <h2 className='text-[1.5625rem] text-center'>They don't have Oauth login.</h2>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full gap-4'>
                <div className="w-full">
                    <EmailInput
                        placeholder="Email Address"
                        className={`w-full ${emailError ? 'border-red-500' : ''}`}
                        componentClass='w-full'
                        value={email}
                        onChange={handleEmailChange}
                        emailError={emailError}
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                </div>
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className='w-full p-4 rounded-4xl text-white font-medium bg-purple-100 hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {isSubmitting ? 'Continuing...' : 'Continue'}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signin
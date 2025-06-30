import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import EmailInput from '@/components/common/EmailInput'
import PasswordInput from '@/components/common/PasswordInput'
import WayfairTextLogo from '@/assets/icons/wayfairTextLogo.svg?react'
import { getEmailError } from '@/utils/emailValidation'
import { isPasswordValid, getPasswordError } from '@/utils/passwordValidation'
import { AuthService } from '@/services/authService'

const Signin = () => {
  const [currentPage, setCurrentPage] = useState('email')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value
    setEmail(newEmail)

    if (emailError) {
      setEmailError('')
    }
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value
    
    setPassword(newPassword)
    if (passwordError) {
      setPasswordError('')
    }
  }

  const handleEmailSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) setEmailError('Email is reuqired')

    const emailValidationError = getEmailError(email)
    if (emailValidationError) {
      setEmailError(emailValidationError)
      return
    }

    try {
      const existingUser = await AuthService.checkEmailExists(email)
      
      if (existingUser.exists) {
        setCurrentPage('sign-in')
      } else {
        setCurrentPage('sign-up')
      }
    } catch (error) {
      console.log('email check error:', error)
      setEmailError('Email check network error.')
    }
  }

  async function handleSingUpSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!isPasswordValid(password)) {
      setPasswordError(getPasswordError(password))
      return
    }
    if (!email) {
      setCurrentPage('email')
      setEmailError('Email is reuqired')
      return
    }

    try {
      const newUser = await AuthService.signUpUser(email, password, 'User')
      console.log('Sign up success!', newUser)
    } catch (error) {
      setPasswordError('Sign up check network error. Please try agian after a moment.')
    }
  }

  function pageChangeToEmail() {
    setEmail('')
    setEmailError('')
    setCurrentPage('email')
    setPassword('')
    setPasswordError('')
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90%] mx-auto py-8 flex justify-between border-b border-gray-100 items-center">
        <Link to="/" className="w-[210px] h-[45px] block">
          <WayfairTextLogo className="w-full h-full" />
        </Link>
        <p className="font-medium text-base">Secure Login</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-1 w-full max-w-[400px] mt-10">
        {/* Email step */}
        {currentPage === 'email' && (
          <div>
            <h1 className="text-[1.5625rem] font-bold text-center">
              Enter your email address to sign in or to create an account
            </h1>
            <h2 className="text-[1.5625rem] text-center">They don't have Oauth login.</h2>

            <form
              onSubmit={handleEmailSubmit}
              className="flex flex-col justify-center items-center w-full gap-4"
            >
              <div className="w-full">
                <EmailInput
                  placeholder="Email Address"
                  className={`w-full ${emailError ? 'border-red-500' : ''}`}
                  componentClass="w-full"
                  value={email}
                  onChange={handleEmailChange}
                  emailError={emailError}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>
              <button
                type="submit"
                className="w-full p-4 rounded-4xl text-white font-medium bg-purple-100 hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </form>
          </div>
        )}

        {/* Email don't exists, create a new password */}
        {currentPage === 'sign-up' && (
          <div className='w-full'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className="text-[1.5625rem] font-bold text-center">
                Create a Password
              </h1>
              <p className='text-[1.15rem] mt-3'>{email}</p>
              <button className="text-purple-100 underline hover:no-underline text-[1.15rem]" onClick={() => setCurrentPage('email')}>
                Use a different account
              </button>
            </div>


            <form
              onSubmit={handleSingUpSubmit}
              className="flex flex-col justify-center items-center w-full gap-4"
            >
              <div className="w-full">
                <PasswordInput
                  placeholder="Minimum 6 characters"
                  className={`w-full ${passwordError ? 'border-red-500' : ''}`}
                  componentClass="w-full mt-2"
                  value={password}
                  onChange={handlePasswordChange}
                  passwordError={passwordError}
                />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>
              <button
                type="submit"
                className="w-full p-4 rounded-4xl text-white font-medium bg-purple-100 hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Account
              </button>
            </form>

            <div className='flex items-center gap-2 justify-center text-[1.15rem] mt-2'>
              <p>Have an account?</p>
              <button className="text-purple-100 underline hover:no-underline text-[1.15rem]"
                onClick={pageChangeToEmail}>
                  Sign In
              </button>
            </div>
          </div>
        )}

        {/* Email exists, sign in */}
        { currentPage === 'sign-in' && (
          <div className='w-full'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className="text-[1.5625rem] font-bold text-center">
              Welcome back!
            </h1>
            <p className='text-[1.15rem] mt-3'>{email}</p>
            <button className="text-purple-100 underline hover:no-underline text-[1.15rem]" onClick={() => setCurrentPage('email')}>
              Use a different account
            </button>
          </div>


          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col justify-center items-center w-full gap-4"
          >
            <div className="w-full">
              <PasswordInput
                placeholder="Minimum 6 characters"
                className={`w-full ${passwordError ? 'border-red-500' : ''}`}
                componentClass="w-full mt-2"
                value={password}
                onChange={handlePasswordChange}
                passwordError={passwordError}
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
            <button
              type="submit"
              className="w-full p-4 rounded-4xl text-white font-medium bg-purple-100 hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </form>
        </div>
        )}
      </div>
    </div>
  )
}

export default Signin


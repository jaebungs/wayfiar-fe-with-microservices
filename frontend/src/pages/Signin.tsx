import { Link } from 'react-router-dom'
import EmailInput from '@/components/common/EmailInput'
import WayfairTextLogo from '@/assets/icons/wayfairTextLogo.svg?react'

const Signin = () => {
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
            <div className='flex flex-col justify-center items-center w-full gap-4'>
                <EmailInput
                    placeholder="Email Address"
                    className='w-full'
                    componentClass='w-full'
                    required
                />
                <button className='w-full p-4 rounded-4xl text-white font-medium bg-purple-100 hover:bg-purple-200'>
                    Continue
                </button>
            </div>

        </div>

    </div>
  )
}

export default Signin
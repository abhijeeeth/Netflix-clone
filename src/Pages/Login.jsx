import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
     <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'> </div>
        <div className='fixed w-full px-4 py-24 z-50'> 
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                <form className='w-full flex flex-col py-4'>

                  <input className='p-3 my-2 bg-gray-700/50 rounded' type="email" placeholder='Enter Your Email' autoComplete='email'/>
                  <input className='p-3 my-2 bg-gray-700/50 rounded' type="password" placeholder='Enter Your Password' autoComplete='current-password'/>
                  <button className='bg-red-600 py-3 my-6 rounded font-bold '>SignIn</button>
                  <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                    <p>Need help?</p>
                  </div>
                  <p className='py-8 hover:cursor-pointer '><span className='text-gray-600'>New to Netflix</span>
                  <Link to={'/signin'}>
                   Sign Up
                   </Link>
                   </p>
                </form>

              </div>

            </div>
        </div>


    </div>
    </>
  )
}

export default Login

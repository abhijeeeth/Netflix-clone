import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

function NavBar() {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  // console.log(user)
  const handleLogout = async ()=>{
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
      </Link>
     
     {user?.email ? ( <div>
          <Link to='/account'>
          <button className='pr-4 text-white'>Account</button>
          </Link>
      
          <button onClick={handleLogout} className='bg-red-600  px-6 py-2 rounded cursor-pointer text-white'>Log Out</button>
   
      </div> ) :( <div>
          <Link to='/login'>
          <button className='pr-4 text-white'>Sign in</button>
          </Link>
          <Link to='/signin'>
          <button className='bg-red-600  px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
          </Link>
      </div> )}
    </div>
  )
}

export default NavBar

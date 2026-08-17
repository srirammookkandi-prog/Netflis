import React from 'react'
import AuthHeader from './AuthHeader'

const Login = () => {
  return (
    <div>
      <AuthHeader/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg" alt=""></img>
      </div>
      <div className='absolute mx-auto right-0 left-0 my-32 p-20 bg-black w-3/12'>
        <form className=''>
          <h1 className='text-red-600'>SIGN IN</h1>
          <input type='email' placeholder='Enter Email' className='p-2 m-2'></input>
          <input type= 'password' placeholder='Enter Password' className='p-2 m-2'></input>
          <button className='p-2 bg-black text-white rounded-lg'>Sign In</button>
        </form>
      </div>
    </div>
  )
}
export default Login
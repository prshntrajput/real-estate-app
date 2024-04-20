import React from 'react'
import Header from './_componenets/Header'
import { SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'

const Provider = ({children}) => {
  return (
    <div>
      <Header/>
      <div className='mt-32'>
      {children}
      </div>
          
    </div>
  )
}

export default Provider
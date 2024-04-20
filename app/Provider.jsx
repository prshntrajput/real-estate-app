import React from 'react'
import Header from './_componenets/Header'
import { SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'

const Provider = ({children}) => {
  return (
    <div>
      {children}
      <Header/>    
    </div>
  )
}

export default Provider
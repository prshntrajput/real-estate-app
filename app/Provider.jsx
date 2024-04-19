import React from 'react'
import Header from './_componenets/Header'

const Provider = ({children}) => {
  return (
    <div>{children}
      <Header/>    
    </div>
  )
}

export default Provider
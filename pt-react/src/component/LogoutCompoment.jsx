import React from 'react'
import { useAuth } from './AuthContext'

export default function LogoutCompoment() {
    const authContext = useAuth()

  return (
    
    <button className='btn btn-warning'>Log out</button>
  )
}

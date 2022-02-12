import React from 'react'
import Navbar from '../Components/Guest/Navbar'

export default function Guest({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

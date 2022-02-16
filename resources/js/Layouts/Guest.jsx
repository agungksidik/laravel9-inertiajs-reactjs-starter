import { Head, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Navbar from '../Components/Guest/Navbar'

export default function Guest({children, title}) {
  return (
    <div>
        <Head title={ title } />
        <Navbar/>
        {children}
    </div>
  )
}

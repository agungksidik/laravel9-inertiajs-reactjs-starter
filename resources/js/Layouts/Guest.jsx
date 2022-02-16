import { Head, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../Components/Guest/Navbar'

export default function Guest({children, title}) {
  const { flash } = usePage().props;

  flash.type && toast[flash.type](flash.message)

  return (
    <div>
        <Head title={ title } />
        <Navbar/>
        <Toaster position='top-center' duration='4000'/>
        {children}
    </div>
  )
}

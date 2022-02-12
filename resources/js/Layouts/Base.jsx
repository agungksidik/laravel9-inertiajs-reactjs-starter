import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Navbar from '../Components/Dashboard/Navbar'
import Sidebar from '../Components/Dashboard/Sidebar'

export default function Base({children, title}) {
    return (
        <div className="g-sidenav-show   bg-gray-100">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
                <Head title={ title } />
                <Sidebar />
                <main class="main-content position-relative border-radius-lg ">
                    <Navbar />
                    {children}
                </main>            
        </div>
    )
}

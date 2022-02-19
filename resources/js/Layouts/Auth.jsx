import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Auth({children, title}) {
    const { flash } = usePage().props;

    if(flash) {
        flash.type && toast[flash.type](flash.message)
    }
    
    return (
        <main className="main-content  mt-0">
            <Head title={ title } />

            <section>            
                <Toaster position='top-center' duration='4000'/>
                {children}                   
            </section>
        </main>
    )
}

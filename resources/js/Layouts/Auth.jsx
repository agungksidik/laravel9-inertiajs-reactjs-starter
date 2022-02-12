import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function Auth({children, title}) {
    return (
        <main className="main-content  mt-0">
            <Head title={ title } />

            <section>            
                {children}                   
            </section>
        </main>
    )
}

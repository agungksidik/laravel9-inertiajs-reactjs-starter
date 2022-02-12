import React from 'react'
import Guest from '../Layouts/Guest'

export default function Home() {
  return (
    <>
        <div className="container py-4">
          test123  123 3456
        </div>
    </>
  )
}

Home.layout = (page) => <Guest children={page} title={"Home"}/>

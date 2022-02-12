import React from 'react'
import Guest from '../Layouts/Guest'

export default function Home() {
  return (
    <>
        <div className='container'>
          <div className="card">
            <div className="card-body">
              Your home page
            </div>
          </div>
        </div>
    </>
  )
}

Home.layout = (page) => <Guest children={page} title={"Home"}/>

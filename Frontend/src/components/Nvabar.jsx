import React from 'react'
import { Link } from 'react-router-dom'

function Nvabar() {
  return (
    <div>
        <div className='bg-black shadow-lg p-3 '>
        <div className='flex justify-between'>
        <div className='ml-96'>
            <h1 className='text-3xl font-semibold font-serif text-white'> Todo App</h1>
  </div>
  <div className='flex justify-end items-end mr-20 '>
<Link to={'/Login'}>
<button className='font-serif text-xl font-medium bg-white text-black w-28 p-2.5 rounded-full '>Login</button>

</Link>  </div>
        </div>
        </div>
    </div>
  )
}

export default Nvabar

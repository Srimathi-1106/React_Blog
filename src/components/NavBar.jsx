import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-black text-white'>

      <h1 className='text-3xl'>Blog</h1>
      <div>
        <ul className='flex gap-8'>
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Login</li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'

const NavbarCs = () => {
  return (
    <div >
        <div className='bg-indigo-800 text-white flex justify-between items-center py-6 px-5'>
            <h1 className='text-xl font-bold'>ApotikU+</h1>
            <div className='flex space-x-5 text-lg'>
                <ul className='flex space-x-5 text-lg font-semibold mr-5'>
                    <li>
                        <Link to='/home' class="relative text-lg font-medium text-white after:block after:h-[2px]    after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100">Home</Link>
                    </li>
                    <li>
                        <Link to='/cs' class="relative text-lg font-medium text-white after:block after:h-[2px]    after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100">obat</Link>
                    </li>
                    <li>
                        <Link to='/about' class="relative text-lg font-medium text-white after:block after:h-[2px]    after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100">About</Link>
                    </li>
                    <li>
                        <Link to='/contact' class="relative text-lg font-medium text-white after:block after:h-[2px]    after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100">Contact Us</Link>
                    </li>
                </ul>
                <div className='space-x-5'>
                    <Link to='/' className='bg-red-600 px-5 py-2 rounded-full font-bold hover:bg-white hover:text-indigo-800'>logout</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarCs
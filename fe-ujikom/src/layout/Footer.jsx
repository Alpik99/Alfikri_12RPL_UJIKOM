import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='bg-indigo-800 text-white text-center py-5'>
            <p>&copy; 2021 ApotikU+</p>
            <div className='flex justify-center gap-5 mt-2'> 
                <a href='#' className='hover:underline'>Privacy Policy</a>
                <a href='#' className='hover:underline'>Terms of Service</a>
            </div>
            <div className='flex justify-center gap-5 mt-2'>
                <a href='#' className='hover:underline'>Facebook</a>
                <a href='#' className='hover:underline'>Instagram</a>
                <a href='#' className='hover:underline'>Twitter</a> 
            </div>
            <div>
                <p className='mt-5'>Alamat: Jl.Kesadaran, Pamulang, Tangerang Selatan</p>
                <p className='mt-5'>Email: apotiku29@gmail.com</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
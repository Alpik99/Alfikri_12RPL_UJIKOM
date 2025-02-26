import React from 'react'
import NavbarCs from '../layout/NavbarCs'
import Footer from '../layout/Footer'
import GeoLocation from './GeoLocation'

const About = () => {
  return (
    <div>
        <NavbarCs />
        <div className='mt-10 mb-10 ml-9 mr-9 text-center bg-gray-100 p-4 rounded-lg shadow-lg '>
            <h1 className='text-3xl font-bold text-center mt-10'>About</h1>
            <p className='text-center mt-5 '>ApotikU+ adalah sebuah aplikasi yang memudahkan pelanggan dalam memesan obat-obatan secara online. Aplikasi ini juga menyediakan informasi mengenai obat-obatan yang dijual di apotik tersebut. Aplikasi ini juga menyediakan informasi mengenai apotik yang tersedia di sekitar peng   guna. </p>
        </div>
        <div>
            
        </div>
        <div className='mmt-10'>
            <Footer />
        </div>
    </div>
  )
}

export default About
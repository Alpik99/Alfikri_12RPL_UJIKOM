import React from 'react'
import NavbarCs from '../layout/NavbarCs'
import Apotek from '../assets/apoteku2.png'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import GeoLocation from './GeoLocation'

const Home = () => {
  return (
    <div>
      <NavbarCs />
      <div>
        <div className=" flex justify-center mb-8 ml-9">
          <div className=" mx-auto p-8 bg-white rounded-lg flex flex-col md:flex-row items-center">
            {/* Konten Teks */}
            <div className="flex-1  gap-1 flex flex-col ">
              <h1 className="text-4xl font-bold text-gray-800">Selamat Datang di Website Kami!</h1>
              <p className="text-gray-600">
                ApotikU+ adalah sebuah web dimana anda dapat mencari obat yang anda butuhkan. Kami juga bisa mengantar pesanan yang anda pesan atau anda juga bisa langsung datang ke toko kami.
              </p>
              <div className='flex gap-2'>
                <a href='#map' className="border border-indigo-800 p-2 bg-white text-indigo-800 px-5 py-1 rounded-full font-bold hover:bg-indigo-800 hover:text-white mt-4">
                  Lihat lokasi toko
                </a>
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center items-center ">
              <img src={Apotek} className="w-43 h-45"/>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 mb-8 ml-9 mr-9 text-center bg-gray-100  rounded-lg shadow-lg '>
        <GeoLocation />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home

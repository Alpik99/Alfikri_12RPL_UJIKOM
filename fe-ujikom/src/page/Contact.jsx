import React from 'react'
import NavbarCs from '../layout/NavbarCs'
import Footer from '../layout/Footer'

const Contact = () => {
  return (
    <div className='bg-gray-100'>
        <div>
            <NavbarCs />
            <h1 className='text-3xl font-bold text-center mt-10'>Contact Us</h1>
            <div className='mt-5'>
                <div className='bg-gray-200 ml-10 mr-10 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-xl font-bold'>Alamat</h1>
                    <p>Jl.Kesadaran, Pamulang, Tangerang Selatan</p>
                </div>
                <div className='bg-gray-200 ml-10 mr-10 mt-5 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-xl font-bold'>Email</h1>
                    <p className='mt-2'>
                        apotiku29@gmail.com
                    </p>    
                </div>
                <div className='bg-gray-200 ml-10 mr-10 mt-5 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-xl font-bold'>Telepon</h1>
                    <p className='mt-2'>
                        083846670992
                    </p>
                </div>
                <div className='bg-gray-200 ml-10 mr-10 mt-5 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-xl font-bold'>Instagram</h1>
                    <p className='mt-2'>
                        @apotiku.plus
                    </p>
                </div>
                <div className='bg-gray-200 ml-10 mr-10 mt-5 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-xl font-bold'>Facebook</h1>
                    <p className='mt-2'>
                        ApotikU+
                    </p>
                </div>
                <div className='bg-gray-200 ml-10 mr-10 mt-5 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-xl font-bold'>Twitter</h1>
                    <p className='mt-2'>
                        @apotikuplus
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-center mb-5 mt-10'>anda juga bisa langsung datang ke toko kami</h1>
                    <iframe
                        width="50%"
                        height="400"
                        style={{ border: 0 }}
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jl.kesadaran%20pamulang%20tangerang%20selatan+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        allowFullScreen
                        loading="lazy"
                        className='items-center mx-auto m-5'
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Contact
import React from 'react';

const GeoLocation = () => {
  return (
    <div id='map' className='mt-8 mb-8 ml-9 mr-9 text-center bg-gray-100  rounded-lg shadow-lg '>
      <h1 className='text-3xl font-bold text-center mb-5'>lokasi toko kami</h1>
      <iframe
        width="100%"
        height="500"
        style={{ border: 0 }}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jl.kesadaran%20pamulang%20tangerang%20selatan+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GeoLocation;

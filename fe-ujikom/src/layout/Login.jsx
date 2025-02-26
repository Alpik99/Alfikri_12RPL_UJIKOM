import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/customer');
      const customers = response.data;
      const user = customers.find(
        (customer) => customer.email === formData.email && customer.password === formData.password
      );

      if (user) {
        navigate('/home');
      } else {
        setError('Email atau password salah');
      }
    } catch (error) {
      console.error('Error saat login:', error);
      setError('Terjadi kesalahan, coba lagi nanti');
    }
  };

  

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-96 p-6 bg-white rounded-md'>
        <h1 className='text-3xl block text-center font-bold'>
          Login
        </h1>
        <hr className='mt-3' />
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mt-3'>
            <label className='block text-base mb-2'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full border border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter email...'
            />
          </div>
          <div className='mt-3'>
            <label className='block text-base mb-2'>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full border border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
              placeholder='Enter password...'
            />
          </div>
          <Link to='/register' className='text-blue-500 block text-center mt-2'>
            Belum punya akun? Daftar disini
          </Link>
          <button type='submit' className='w-full bg-blue-500 text-white rounded-md px-2 py-1 mt-3 block text-center hover:bg-blue-600 '>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

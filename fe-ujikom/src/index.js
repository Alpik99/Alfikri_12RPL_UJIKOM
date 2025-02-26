import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Obat from './page/Obat';
import Home from './page/Home';
import Cart from './page/Cart';
import Login from './layout/Login';
import Customer from './page/Customer';
import RegisterCustomer from './layout/Register';
import Orders from './page/OrderAdmin';
import GeoLocation from './page/GeoLocation';
import About from './page/About';
import ContactUs from './page/Contact';
import LoginAdmin from './layout/LoginAdmin';

const router = createBrowserRouter([
  {
    path: "/",
  element: <RegisterCustomer />
  },
  {
    path: "/obat",
    element: <Obat />
  },
  {
    path:"/cs",
    element: <Cart />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/customer",
    element: <Customer />
  },
  {
    path:'/order',
    element: <Orders />
  },
  {
    path:"/register",
    element: <RegisterCustomer />
  },

  {
    path:'/location',
    element: <GeoLocation />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path: "/contact",
    element: <ContactUs />
  },
  {
    path: "/loginadmin",
    element: <LoginAdmin />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


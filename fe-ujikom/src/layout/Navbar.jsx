import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-xl font-semibold">ApotikU+</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <Link to="/obat" className="flex items-center px-4 py-2 mt-3 text-gray-100 hover:bg-gray-700">
            obat
          </Link>
          <Link to='/order' className="flex items-center px-4 py-2 mt-3 text-gray-100 hover:bg-gray-700">
            order
          </Link>
          <a href="#" className="flex items-center px-4 py-2 mt-3 text-gray-100 hover:bg-gray-700">
            pembayaran
          </a>
          <Link to="/customer" href="#" className="flex items-center px-4 py-2 mt-3 text-gray-100 hover:bg-gray-700">
            customer
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
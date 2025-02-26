import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/customer");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="p-2 w-full">
        <h1 className="text-2xl font-bold mb-4">Daftar akun pelanggan</h1>

        <table className="border-collapse border-gray-400 w-full mt-2">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">No</th>
              <th className="border border-gray-400 p-2">Nama</th>
              <th className="border border-gray-400 p-2">Alamat</th>
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <td className="border border-gray-400 p-2">{index + 1}</td>
                <td className="border border-gray-400 p-2">{customer.nama}</td>
                <td className="border border-gray-400 p-2">{customer.alamat}</td>
                <td className="border border-gray-400 p-2">{customer.email}</td>
                <td className="border border-gray-400 p-2">{customer.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;

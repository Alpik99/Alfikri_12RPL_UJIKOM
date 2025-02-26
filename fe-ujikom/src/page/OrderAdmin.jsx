import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3001/transaksi");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="p-2 w-full">
        <h1 className="text-2xl font-bold mb-4">Daftar Order</h1>

        <table className="border-collapse border-gray-400 w-full mt-2">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">No</th>
              <th className="border border-gray-400 p-2">Nama Pelanggan</th>
              <th className="border border-gray-400 p-2">Nama Obat</th>
              <th className="border border-gray-400 p-2">Jumlah</th>
              <th className="border border-gray-400 p-2">Total Harga</th>
              <th className="border border-gray-400 p-2">Tanggal Pembelian</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td className="border border-gray-400 p-2">{index + 1}</td>
                <td className="border border-gray-400 p-2">{order.Customer?.nama}</td>
                <td className="border border-gray-400 p-2">{order.Medicine?.nama}</td>
                <td className="border border-gray-400 p-2">{order.quantity}</td>
                <td className="border border-gray-400 p-2">{order.total_harga}</td>
                <td className="border border-gray-400 p-2">{order.tanggal_pembelian}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

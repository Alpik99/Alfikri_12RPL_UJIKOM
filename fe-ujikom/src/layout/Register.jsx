import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterCustomer = () => {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "", 
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.alamat ||!formData.email || !formData.password) {
      setError("Semua field harus diisi!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/customer/create", formData);
      console.log("Data pelanggan berhasil ditambahkan:", response.data);

      navigate("/login");
    } catch (error) {
      console.error("Error menambahkan pelanggan:", error);
      setError("Terjadi kesalahan saat mendaftarkan pelanggan.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ApotikU+</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama:</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Alamat:</label>
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan alamat"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan password"
            />
          </div>
          <div className="mb-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
            <p className="text-sm text-gray-600">
              {" "}
              <a href="/loginadmin" className="text-blue-500 hover:underline">
                Login admin
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterCustomer;
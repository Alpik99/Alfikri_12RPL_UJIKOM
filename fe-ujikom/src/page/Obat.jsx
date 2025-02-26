import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";  
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Obat = () => {
  const [medicines, setMedicines] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [newMedicine, setNewMedicine] = useState({
    nama: "",
    harga: "",
    stok: "",
    gambar: "",
  });

  const navigate = useNavigate();

  const fetchMedicines = async () => {
    try {
      const response = await axios.get("http://localhost:3001/medicine");
      setMedicines(response.data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/medicine/delete/${id}`);
      fetchMedicines();
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  const handleAddMedicine = async () => {
    if (!newMedicine.nama || !newMedicine.harga || !newMedicine.stok || !newMedicine.gambar) {
      alert("Semua field harus diisi!");
      return;
    }

    try {
      await axios.post("http://localhost:3001/medicine/create", newMedicine);
      setIsModalOpen(false);
      setNewMedicine({ nama: "", harga: "", stok: "", gambar: "" });
      fetchMedicines();
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  const handleEditMedicine = async () => {
    if (!newMedicine.nama || !newMedicine.harga || !newMedicine.stok || !newMedicine.gambar) {
      alert("Semua field harus diisi!");
      return;
    }

    try {
      await axios.put(`http://localhost:3001/medicine/update/${selectedMedicine.id}`, newMedicine);
      setIsModalOpen(false);
      setIsEditMode(false);
      setSelectedMedicine(null);
      setNewMedicine({ nama: "", harga: "", stok: "", gambar: "" });
      fetchMedicines();
    } catch (error) {
      console.error("Error updating medicine:", error);
    }
  };

  const openEditModal = (medicine) => {
    setIsModalOpen(true);
    setIsEditMode(true);
    setSelectedMedicine(medicine);
    setNewMedicine({ ...medicine });
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="p-2 w-full">
        <h1 className="text-2xl font-bold mb-4">Daftar Obat</h1>

        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => {
              setIsModalOpen(true);
              setIsEditMode(false);
              setNewMedicine({ nama: "", harga: "", stok: "", gambar: "" });
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> tambahkan data obat
          </button>
        </div>

        <table className="border-collapse border-gray-400 w-full mt-2">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">No</th>
              <th className="border border-gray-400 p-2">Gambar</th>
              <th className="border border-gray-400 p-2">Nama Obat</th>
              <th className="border border-gray-400 p-2">Harga</th>
              <th className="border border-gray-400 p-2">Stok</th>
              <th className="border border-gray-400 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={medicine.id}>
                <td className="border border-gray-400 p-2">{index + 1}</td>
                <td className="border border-gray-400 p-2">
                  <img src={medicine.gambar} alt={medicine.nama} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="border border-gray-400 p-2">{medicine.nama}</td>
                <td className="border border-gray-400 p-2">Rp {medicine.harga}</td>
                <td className="border border-gray-400 p-2">{medicine.stok}</td>
                <td className="border border-gray-400 p-2">
                  <button
                    className="bg-blue-600 text-white py-2 px-5 rounded-lg mr-2"
                    onClick={() => openEditModal(medicine)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-5 rounded-lg"
                    onClick={() => handleDelete(medicine.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">{isEditMode ? "Edit Obat" : "Tambah Obat"}</h2>

              <label className="block mb-2">
                Nama Obat:
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={newMedicine.nama}
                  onChange={(e) => setNewMedicine({ ...newMedicine, nama: e.target.value })}
                />
              </label>

              <label className="block mb-2">
                Harga:
                <input
                  type="number"
                  className="w-full border p-2 rounded"
                  value={newMedicine.harga}
                  onChange={(e) => setNewMedicine({ ...newMedicine, harga: e.target.value })}
                />
              </label>

              <label className="block mb-2">
                Stok:
                <input
                  type="number"
                  className="w-full border p-2 rounded"
                  value={newMedicine.stok}
                  onChange={(e) => setNewMedicine({ ...newMedicine, stok: e.target.value })}
                />
              </label>

              <label className="block mb-4">
                Link Gambar:
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={newMedicine.gambar}
                  onChange={(e) => setNewMedicine({ ...newMedicine, gambar: e.target.value })}
                />
              </label>

              <div className="flex justify-end">
                <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => setIsModalOpen(false)}>
                  Batal
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={isEditMode ? handleEditMedicine : handleAddMedicine}
                >
                  {isEditMode ? "Update" : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Obat;

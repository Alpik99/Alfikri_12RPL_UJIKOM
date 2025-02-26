import { useEffect, useState } from "react";
import axios from "axios";
import NavbarCs from "../layout/NavbarCs";

const Cart = () => {
  const [dataObat, setDataObat] = useState([]);
  const [selectedObat, setSelectedObat] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/medicine");
        setDataObat(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const total = selectedObat.reduce((acc, item) => {
      return acc + item.harga * item.quantity;
    }, 0);

    setTotalHarga(total);
  }, [selectedObat]);

  const handleAddToCart = (obat) => {
    const isObatExsist = selectedObat.find((item) => item.id === obat.id);

    if (isObatExsist) {
      const newSelectedObat = selectedObat.map((item) => {
        if (item.id === obat.id) {
          return { ...item, quantity: item.quantity + 1 };  
        }
        return item;
      });

      setSelectedObat(newSelectedObat);
    } else {
      setSelectedObat([...selectedObat, { ...obat, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (obat) => {
    const newSelectedObat = selectedObat
      .map((item) => {
        if (item.id === obat.id) {
          return { ...item, quantity: item.quantity * 0 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setSelectedObat(newSelectedObat);
  };

  const handleCheckout = async () => {
    try {
      await axios.post("http://localhost:3001/transaksi/create", {
        obat: selectedObat,
        total_harga: totalHarga,
      });

      setSelectedObat([]);
    } catch (error) {
      console.error("Error checkout:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);  
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  const confirmCheckout = () => {
    handleCheckout(); 
    closeModal(); 
  };

  return (
    <div>
      <NavbarCs />
      <div className="flex justify-center items-start mt-10 space-x-4 m-4">
        <div className="w-3/4">
          <h1 className="text-2xl font-bold mb-4">Daftar Obat</h1>
          <div className="grid grid-cols-3 gap-4">
            {dataObat.map((obat) => (
              <div key={obat.id} className="border p-2 rounded-lg">
                <img src={obat.gambar} alt={obat.nama} className="w-full h-40 object-cover" />
                <h2 className="font-bold">{obat.nama}</h2>
                <p className="text-sm text-gray-500">Rp {obat.harga}</p>
                <p className="text-sm text-gray-500">Stok tersedia : {obat.stok}</p>
                <button
                  onClick={() => handleAddToCart(obat)}
                  className="bg-blue-500 text-white px-2 py-1 mt-2 rounded-lg font-bold"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <h1 className="text-2xl font-bold mb-4">Keranjang</h1>
          <div>
            {selectedObat.map((obat) => (
              <div key={obat.id} className="flex">
                <div>
                  <img src={obat.gambar} alt={obat.nama} className="w-16 h-16 object-cover" />
                  <h2 className="font-bold">{obat.nama}</h2>
                  <p className="text-sm text-gray-500">Rp {obat.harga}</p>
                  <p className="text-sm text-gray-500">Rp {obat.stok}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveFromCart(obat)}
                    className="bg-red-500 text-white px-2 py-1 mt-2 rounded-lg font-bold mr-2"
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <span className="mx-2">quantity : {obat.quantity}</span>
                  <p className="font-bold">total: Rp.{obat.harga * obat.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={openModal} 
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg font-bold mb-5"
        >
          Checkout
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Konfirmasi Pesanan</h2>
            <p>Apakah Anda yakin ingin melanjutkan ke checkout?</p>
            
            <div className="mt-4">
              <h3 className="font-bold">Barang yang dipesan:</h3>
              <div className="space-y-2">
                {selectedObat.map((obat) => (
                  <div key={obat.id} className="flex justify-between">
                    <span>{obat.nama} x {obat.quantity}</span>
                    <span>Rp {obat.harga * obat.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between font-bold">
                <span>Total Harga:</span>
                <span>Rp {totalHarga}</span>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Batal
              </button>
              <button
                onClick={confirmCheckout}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Ya, Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

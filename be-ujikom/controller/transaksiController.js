import Transaksi from "../models/transaksiModel.js";
import Customer from "../models/customerModels.js";
import Medicine from "../models/medicineModel.js";


export const getAllTransaksi = async (req, res) => {
    try{
        const transaksi = await Transaksi.findAll({
            include: [
                {
                    model: Customer,
                    as: "Customer",
                },
                {
                    model: Medicine,
                    as: "Medicine",
                },
            ],
        });
        res.status(200).json(transaksi)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllTransaksi"})
    }
};

export const getTransaksiById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const transaksi = await Transaksi.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!transaksi) {
            return res.status(404).json({ message: "Transaksi tidak ditemukan" });
        }
        res.status(200).json(transaksi);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createTransaksi = async (req, res) => {
    try{
        const { total_harga, quantity, tanggal_pembelian, MedicineId, CustomerId } = req.body;
        const transaksi = await Transaksi.create({total_harga, quantity, tanggal_pembelian,  MedicineId, CustomerId});
        res.status(200).json(transaksi);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createTransaksi"})
    }
}

export const updateTransaksi = async (req, res) => {
    try{
        const { id } = req.params;
        const { total_harga, quantity, tanggal_pembelian,  MedicineId, CustomerId } = req.body;
        const updated = await Transaksi.update({ total_harga, quantity, tanggal_pembelian,  MedicineId, CustomerId }, { where: { id } });
        const updatedTransaksi = await Transaksi.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "Transaksi tidak ter-update"})
        }else{
            res.status(200).json(updateTransaksi);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate transaksi"})
    }
}

export const deleteTransaksi = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Transaksi.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}
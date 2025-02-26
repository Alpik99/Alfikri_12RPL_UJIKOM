import Pembayaran from "../models/pembayaranModel.js";


export const getAllPembayaran = async (req, res) => {
    try{
        const pembayaran = await Pembayaran.findAll();
        res.status(200).json(pembayaran)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllMedicine"})
    }
};

export const getPembayaranById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const pembayaran = await Pembayaran.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!pembayaran) {
            return res.status(404).json({ message: "obat tidak ditemukan" });
        }
        res.status(200).json(pembayaran);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createPembayaran = async (req, res) => {
    const { tanggal_transaksi, status_transaksi, TransaksiId } = req.body;
    const pembayaran = await Pembayaran.create({ tanggal_transaksi, status_transaksi, TransaksiId });
  
    res.status(201).json(pembayaran);
};


export const updatePembayaran = async (req, res) => {
    try{
        const { id } = req.params;
        const { tanggal_transaksi, status_transaksi } = req.body;
        const updated = await Pembayaran.update({ tanggal_transaksi, status_transaksi }, { where: { id } });
        const updatePembayaran = await Pembayaran.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updatePembayaran);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate obat"})
    }
}

export const deletePembayaran = async (req, res) => {
    try{
        const { id } = req.params;
        const pembayaran = await Pembayaran.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}
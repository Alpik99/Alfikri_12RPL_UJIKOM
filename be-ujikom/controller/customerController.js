import Customer from "../models/customerModels.js";


export const getAllCustomer = async (req, res) => {
    try{
        const customer = await Customer.findAll();
        res.status(200).json(customer)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllCustomer"})
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findByPk(id); 
        if (!customer) {
            return res.status(404).json({ message: "customer tidak ditemukan" });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};



export const createCustomer = async (req, res) => {
    try{
        const { nama, alamat, email, password } = req.body;
        const customer = await Customer.create({nama, alamat, email, password});
        res.status(200).json(customer);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createCustomer"})
    }
}


export const updateCustomer = async (req, res) => {
    try{
        const { id } = req.params;
        const { nama, alamat,  email, password } = req.body;
        const updated = await Customer.update({ nama, alamat, email, password }, { where: { id } });
        const updateCustomer = await Customer.findByPk(id);
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updateCustomer);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate data customer"})
    }
}

export const deleteCustomer = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Customer.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}
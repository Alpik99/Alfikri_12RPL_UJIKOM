import User from "./UserModel.js";
import { DataTypes } from "sequelize";
import Medicine from "./medicineModel.js";
import db from "../utils/connection.js";
import Pembayaran from "./pembayaranModel.js";

const Transaksi = db.define(
    "Transaksi",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total_harga: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tanggal_pembelian: {
            type: DataTypes.DATE,
            allowNull: false
        },
        
    },
    {
        tableName: "order",
        timestamps: true
    }
)

Medicine.belongsTo(Transaksi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Transaksi.hasMany(Medicine, {
    foreignKey: "MedicineId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


export default Transaksi;
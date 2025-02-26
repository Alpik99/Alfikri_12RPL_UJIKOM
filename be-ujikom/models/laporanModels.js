import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Pembayaran from "./pembayaranModel.js";

const laporan = db.define (
"Laporan",
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    tanggal_transaksi: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status_transaksi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    tableName: "laporan"
}
)

Pembayaran.belongsTo(laporan, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

laporan.hasOne(Pembayaran, {
    foreignKey: "laporanId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})



export default laporan;
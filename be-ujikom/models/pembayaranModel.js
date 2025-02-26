import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Transaksi from "./transaksiModel.js";

const Pembayaran = db.define (
"Pembayaran",
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    
    metode_pembayaran: {
        type: DataTypes.STRING,
        allowNull: false
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
    tableName: "payment"
}
)




export default Pembayaran;

import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
// import Transaksi from "./transaksiModel.js";

const Medicine = db.define (
    "Medicine",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        harga: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stok: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gambar: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "medicine"
    }
)

    


export default Medicine;
import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Transaksi from "./transaksiModel.js";

const Customer = db.define (
    "Customer",
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
        alamat : {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "customer"
    }
)

Customer.hasMany(Transaksi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Transaksi.belongsTo(Customer, {
    foreignKey: "CustomerId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

export default Customer;
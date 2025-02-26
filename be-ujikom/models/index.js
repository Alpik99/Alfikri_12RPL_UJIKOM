import db from "../utils/connection.js";
import medicine from "./medicineModel.js";
import User from "./UserModel.js";
import customer from "./customerModels.js";
import Transaksi from "./transaksiModel.js";
import Pembayaran from "./pembayaranModel.js";
import laporan from "./LaporanModels.js";


await db.sync({ alter: true });

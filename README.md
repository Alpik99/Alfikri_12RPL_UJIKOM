# CASE PROJECT : Sistem Penjualan Obat Secara Online 💊🚳

## Deskripsi 📌
Sistem ini memungkinkan pengguna untuk membeli berbagai jenis obat secara online. Pengguna dapat melihat daftar obat yang tersedia, melakukan pemesanan, dan menyelesaikan pembayaran dengan mudah. Admin memiliki kontrol penuh untuk mengelola produk dan pesanan.

# DESKRIPSI CASE 🏥
Dalam project ini terdapat beberapa entitas utama yang berhubungan satu sama lain:

## Hubungan Antar Tabel:
### 1. Admin (Admin): Admin memiliki akses penuh untuk mengelola produk, pesanan, dan pengguna.
### 2. Customer (Pelanggan): Pengguna yang membeli obat secara online.
### 3. Produk (Obat): Obat-obatan yang tersedia untuk dibeli oleh pelanggan.
### 4. Order (Pesanan): Data pemesanan yang dilakukan oleh pelanggan.
### 5. Payment (Pembayaran): Metode pembayaran yang digunakan oleh pelanggan setelah melakukan pemesanan.
### 6. Report (Laporan): Menyimpan hasil penjualan berdasarkan pesanan yang telah diselesaikan.

# RELASI ANTAR ENTITAS 🔗

## 1. Admin (admin):
Admin memiliki akses untuk menambahkan, mengedit, dan menghapus obat serta mengelola pesanan dan laporan.  
Relasi: One-to-Many dengan Produk, Order, dan Report.

## 2. Customer (pelanggan):
Setiap pelanggan dapat melakukan pemesanan obat.  
Relasi: One-to-Many dengan Order.

## 3. Produk (obat):
Obat yang tersedia dalam sistem dapat dibeli oleh pelanggan.  
Relasi: One-to-Many dengan Order.

## 4. Order (pesanan):
Setiap pesanan mencatat detail pembelian obat oleh pelanggan.  
Relasi: Many-to-One dengan Customer dan Produk. One-to-One dengan Payment dan Report.

## 5. Payment (Pembayaran):
Setiap pelanggan dapat memilih metode pembayaran yang disediakan.  
Relasi: One-to-One dengan Order.

## 6. Report (Laporan):
Digunakan untuk mencatat hasil penjualan berdasarkan pesanan yang telah diselesaikan.  
Relasi: One-to-One dengan Order dan Many-to-One dengan Admin.

Struktur tabel laporan mencakup:
- **id** (Primary Key)
- **order_id** (Foreign Key ke tabel Order)
- **total_pendapatan** (Total hasil dari pesanan)
- **jumlah_obat_terjual** (Jumlah total obat yang terjual)
- **tanggal_transaksi** (Tanggal pesanan diselesaikan)

Dengan tabel ini, admin dapat melihat data penjualan dengan lebih mudah! 🚀

# Dependecies / Teknologi yang digunakan 🖥️

## Backend

1. **npm init -y**
   
   Perintah ini digunakan untuk menginisialisasi proyek dan membuat file package.json.
   
   ```bash
   npm init -y
   ```

2. **express**
   
   Express JS sebagai framework Node.js untuk mengelola request dan response HTTP.
   
   ```bash
   npm i express
   ```

3. **mysql2**
   
   Package untuk melakukan koneksi ke database MySQL.
   
   ```bash
   npm i mysql2
   ```

4. **dotenv**
   
   Dotenv untuk mengatur variabel lingkungan.
   
   ```bash
   npm i dotenv
   ```

5. **sequelize**
   
   ORM yang digunakan untuk mengelola database.
   
   ```bash
   npm i sequelize
   ```

6. **nodemon**
   
   Untuk menjalankan server secara otomatis ketika ada perubahan pada kode.
   
   ```bash
   npm install nodemon
   ```

   Jalankan server dengan perintah:
   
   ```bash
   nodemon server.js
   ```

## Frontend

1. **React JS**
   
   Digunakan sebagai framework frontend untuk membangun antarmuka pengguna.
   
   ```bash
   npx create-react-app frontend
   ```

2. **axios**
   
   Digunakan untuk melakukan HTTP request ke backend.
   
   ```bash
   npm i axios
   ```

3. **tailwindcss**
   
   Framework CSS untuk styling yang cepat dan responsif.
   
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

   Inisialisasi Tailwind CSS:
   
   ```bash
   npx tailwindcss init -p
   ```

Aplikasi akan berjalan pada port yang ditentukan di file .env. 🚀


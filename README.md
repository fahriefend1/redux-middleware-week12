# 🛒 Redux Middleware - Week 12

Aplikasi sederhana untuk belajar **Redux Middleware** dengan implementasi **Logger** dan **Thunk**.

## 📚 Materi yang Dipelajari

- ✅ Redux Middleware
- ✅ Logger Middleware
- ✅ Thunk Middleware
- ✅ Fetch data dari Fake Store API
- ✅ State management dengan Redux
- ✅ Add to Cart & Remove from Cart

## 🚀 Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 📦 Product List | Menampilkan daftar produk dari API |
| 🛒 Shopping Cart | Menambahkan dan menghapus produk dari keranjang |
| 📊 Redux State | Manajemen state dengan Redux |
| 🔍 Logger | Mencatat setiap action yang terjadi |
| ⏳ Async | Mengambil data produk secara asynchronous |

## 📁 Struktur Folder
```
week12/
├── src/
│ ├── store/
│ │ ├── index.js # Konfigurasi Redux Store
│ │ ├── actions/
│ │ │ └── productActions.js # Action creators
│ │ ├── reducers/
│ │ │ ├── productReducer.js # Reducer produk
│ │ │ └── cartReducer.js # Reducer keranjang
│ │ └── middleware/
│ │ └── logger.js # Logger middleware
│ ├── components/
│ │ ├── ProductList.js # Daftar produk
│ │ ├── ProductList.css # Styling produk
│ │ ├── Cart.js # Keranjang belanja
│ │ └── Cart.css # Styling keranjang
│ ├── App.js # Komponen utama
│ ├── App.css # Styling utama
│ ├── index.js # Entry point
│ └── index.css # Global styling
├── public/
│ ├── index.html
│ ├── manifest.json
│ └── ...
├── package.json
└── README.md
```
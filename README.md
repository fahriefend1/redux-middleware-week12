# Simple Store

Project React + Redux — Kerangka Kerja Pengembangan Antarmuka Website (KKPAW).

Mencakup:
- **Pertemuan 12 — Middleware**: Logger middleware & Thunk middleware (async action untuk fetch produk dari FakeStoreAPI).
- **Pertemuan 13 — Autentikasi**: Login (localStorage), Register, Logout, Login dengan API, dan proteksi rute `/cart`.

## Menjalankan project

```bash
npm install
npm start
```

Buka http://localhost:3000

## Struktur

```
src/
  store/
    index.js              # Redux store + middleware (thunk, logger)
    middleware/logger.js
    actions/
      productActions.js
      cartActions.js
      authActions.js
    reducers/
      productReducer.js
      cartReducer.js
      authReducer.js
  components/
    ProductList.js
    Cart.js
    CartIcon.js
    Login.js
    LoginAPI.js
    Register.js
    Logout.js
  App.js
  App.css
  index.js
```

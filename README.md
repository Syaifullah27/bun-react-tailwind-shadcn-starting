# Bun React Tailwind Shadcn Starter

## 📋 Deskripsi Aplikasi

Aplikasi ini adalah template starter modern menggunakan Bun, React, Tailwind CSS, dan Shadcn UI. Template ini menyediakan struktur siap pakai untuk membangun aplikasi web dengan stack terkini, serta beberapa fitur contoh seperti Counter interaktif.

## ✨ Fitur Utama

- **Counter Component**
  - Komponen penghitung (Counter) dengan dua tombol (+) dan (–) untuk menambah/mengurangi nilai.
  - Nilai counter tidak bisa kurang dari 0 (tombol kurang otomatis nonaktif jika 0).
  - State counter dikelola di komponen utama (`App.tsx`) dan dikirim ke Counter sebagai props (Lifting State Up).
  - Tersedia tombol **Reset Counter** untuk mengatur ulang nilai counter ke 0.
- **Integrasi Tailwind CSS & Shadcn UI**
  - Styling modern dan responsif.
- **Struktur Proyek Modular**
  - Komponen, utilitas, dan aset terorganisir dengan baik.
- **Contoh Komponen API Tester**
  - Untuk pengujian endpoint API (bisa dikembangkan lebih lanjut).

## 🚀 Cara Menjalankan Aplikasi

1. **Install dependencies**

   ```bash
   bun install
   ```

2. **Jalankan server development**

   ```bash
   bun dev
   ```

   Akses aplikasi di browser pada alamat yang tertera di terminal (biasanya http://localhost:3000).

3. **Build untuk produksi**

   ```bash
   bun run build
   ```

4. **Jalankan untuk produksi**

   ```bash
   bun start
   ```

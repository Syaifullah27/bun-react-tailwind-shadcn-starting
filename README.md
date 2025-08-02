
![image](/src/docs/images/skrinsut.png "image")
![image](/src/docs/images/ss.png "image")
# Bootcamp Registration Application

## Fitur Utama
1. **Profile Card Modern**
   - Animasi Framer Motion
   - Glowing effect pada avatar
   - Social media icons dengan SVG
   - Responsif di semua perangkat

2. **Registration Form**
   - Form pendaftaran lengkap dengan 8 field
   - Conditional rendering untuk notes
   - Toast notification dengan Sonner
   - Tampilan data yang sudah disubmit
   - Event handling untuk semua interaksi
   - Responsif untuk mobile dan desktop

## Teknologi
- React 18
- TailwindCSS 3
- Framer Motion (animasi)
- Sonner (toast notifications)
- TypeScript
- Bun (package manager)

## Struktur Proyek
src/
├── components/
│ ├── shared/ # Komponen utama aplikasi
│ └── ui/ # Komponen UI kustom
├── data/ # Data statis aplikasi
├── hooks/ # Custom hooks
├── interfaces/ # TypeScript interfaces
├── lib/ # Utilities
└── public/ # Aset statis

## Cara Menjalankan
```bash
bun install
bun run dev
# Tugas 9: Advanced React Hooks & State Management

![image](/src/docs/images/skrinsut.png "image")
## Fitur Utama

1. **Fetch Data Karakter Dragon Ball**
   - Menggunakan `useEffect` untuk fetch data dari API
   - Menampilkan karakter dengan nama, gambar, dan detail
   - Loading skeleton saat data sedang di-fetch
   - Error handling dengan tampilan user-friendly

2. **Pencarian dengan Optimisasi `useMemo`**
   - Input pencarian untuk memfilter karakter berdasarkan nama
   - Menggunakan `useMemo` untuk optimasi performa pencarian

3. **Dark Mode dengan `useContext`**
   - Tema global menggunakan React Context
   - Tombol toggle tema (light/dark)
   - Menyimpan preferensi tema di local storage
   - Mendeteksi preferensi tema sistem

4. **Global State Management dengan Zustand**
   - Counter sederhana menggunakan Zustand
   - State global terpisah dari komponen

## Teknologi

- React 18
- TailwindCSS 3
- Zustand (state management)
- Framer Motion (animasi)
- Lucide React (ikon)
- Sonner (toast notifications)
- Dragon Ball API (https://dragonball-api.com)
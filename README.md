# 🪪 Profile Card Component

![image](/src/docs/images/ss.png "image")

Komponen Profile Card interaktif yang menampilkan informasi profil dengan tombol media sosial yang dapat diklik.

## 🚀 Teknologi Utama

- **React** + **TypeScript**
- **Shadcn UI** untuk komponen UI
- **Tailwind CSS** untuk styling
- **Bun** sebagai runtime

## 📁 Struktur File Penting

src/
├── components/
│ ├── shared/ # Komponen shared
│ └── ui/ # Komponen UI kustom
├── data/ # Data aplikasi
├── interfaces/ # TypeScript interfaces
├── lib/ # Utilities
└── public/ # Aset statis

## ⚙️ Instalasi

```bash
# Clone repositori
git clone https://github.com/username/project.git
cd project

# Instal dependensi
bun install

# Jalankan aplikasi
bun run dev

```


## Cara Penggunaan
```tsx
<ProfileCard
  name="Nama Anda"
  description="Deskripsi Profesi"
  image="/path/to/image.png"
  socialMedia={[
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' }
  ]}
/>
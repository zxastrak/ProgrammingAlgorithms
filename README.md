# 🎓 Profile Page — ReactJS + Tailwind CSS
> Tugas Project-Based: ReactJS dengan GitHub — Universitas Brawijaya

---

## 📁 Struktur Folder

```
profile-page/
├── public/                      ← Taruh foto profil di sini
├── src/
│   ├── components/              ← Komponen reusable
│   │   ├── Navbar.jsx           ← Navigasi antar anggota
│   │   ├── ProfileAvatar.jsx    ← Komponen foto profil
│   │   ├── InfoCard.jsx         ← Komponen info field
│   │   ├── Badge.jsx            ← Komponen badge/tag
│   │   └── SectionDivider.jsx   ← Garis pemisah dekoratif
│   ├── pages/                   ← Halaman profil tiap anggota
│   │   └── nama-anda.jsx        ← Template halaman profil ← EDIT INI
│   ├── App.jsx                  ← Router utama
│   ├── main.jsx                 ← Entry point
│   └── index.css                ← Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan dev server
```bash
npm run dev
```

### 3. Buka di browser
```
http://localhost:5173/nama-anda
```

---

## ✏️ Cara Edit Profil Kamu

Buka file `src/pages/nama-anda.jsx`, lalu ubah bagian `profileData`:

```js
const profileData = {
  namaLengkap: 'Nama Lengkap Kamu',   // ← Ganti ini
  kelas: 'TI-A 2023',                 // ← Ganti ini
  jurusan: 'Teknik Informatika',      // ← Ganti ini
  domisili: 'Malang, Jawa Timur',     // ← Ganti ini
  fotoProfil: '/foto-profil.jpg',     // ← Taruh foto di /public, atau null
  tentangDiri: `...`,                 // ← Isi min 100 kata
  skills: ['ReactJS', ...],           // ← Tambah skill kamu
  hobi: ['Coding', ...],
  sosial: {
    github: 'github.com/username',
    linkedin: '',
    instagram: '',
  },
}
```

---

## 👥 Cara Menambah Anggota Tim

### Langkah 1 — Buat file halaman profil baru
Duplikat file `src/pages/nama-anda.jsx` menjadi `src/pages/surya-rafliansyah.jsx`
(nama file = nama anggota dengan tanda hubung, huruf kecil)

### Langkah 2 — Edit `profileData` sesuai data anggota

### Langkah 3 — Daftarkan di `App.jsx`
```jsx
import SuryaRafliansyah from './pages/surya-rafliansyah'

// Di dalam <Routes>:
<Route path="/surya-rafliansyah" element={<SuryaRafliansyah />} />
```

### Langkah 4 — Daftarkan di `Navbar.jsx`
```js
const members = [
  { name: 'Nama Anda', path: '/nama-anda' },
  { name: 'Surya Rafliansyah', path: '/surya-rafliansyah' },  // ← Tambah ini
]
```

---

## 📸 Cara Menambah Foto Profil

1. Taruh file foto (JPG/PNG) ke folder `/public/`
2. Contoh: `/public/foto-surya.jpg`
3. Di `profileData`, set: `fotoProfil: '/foto-surya.jpg'`

---

## 🌿 Struktur Branch GitHub

Sesuai instruksi tugas:
```
main
├── dev/nama-tim-1      ← branch kamu
├── dev/nama-tim-2
├── dev/nama-tim-3
└── ...
```

### Workflow Git
```bash
# Clone repo
git clone https://github.com/username/profile-page.git
cd profile-page

# Buat branch kamu
git checkout -b dev/nama-kamu

# Setelah selesai edit
git add .
git commit -m "feat: add profile page for Nama Kamu"
git push origin dev/nama-kamu
```

---

## 🛠️ Tech Stack

- **ReactJS** v18
- **Vite** v5 (build tool)
- **Tailwind CSS** v3
- **React Router DOM** v6
- **Google Fonts** — Syne + Space Mono

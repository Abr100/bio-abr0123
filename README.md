# Bio TikTok — Template

Sederhana satu-halaman HTML/CSS/JS untuk diletakkan di bio TikTok Anda.

File:
- `index.html` — struktur halaman
- `styles.css` — gaya responsif
- `script.js` — data profil dan interaksi (salin link)

Cara kustomisasi:
- Edit `script.js` untuk mengganti `profile` (handle, tautan, email, avatar, bio).
- Ganti `avatar-placeholder.png` dengan foto Anda.
- Warna utama (aksen) telah diset ke merah; ubah `--accent` di `styles.css` jika perlu.

Contoh pengaturan awal di proyek ini:
- Username: `@ABR`
- Konten: Minecraft (builds, tips, gameplay)
- Warna: Merah

Jalankan lokal (Python):

```bash
python -m http.server 8000
```

Lalu buka http://localhost:8000 di browser dan buka `index.html`.

Deployment cepat:
- GitHub Pages: buat repository, push file, aktifkan Pages dari `main` branch.
- Netlify / Vercel: tarik dari repository atau drag-and-drop folder build.

Jika Anda mau, kirimkan bio, warna utama, foto, dan tautan lain — saya akan sesuaikan desainnya.
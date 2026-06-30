# Context: Portfolio Profesional — Muhammad Fiqri Agustriawan

> File ini adalah **context engineering document** untuk dipakai di Claude / Gemini (Antigravity) guna membangun ulang portofolio Fiqri menjadi versi profesional, dengan referensi desain dari `andi.ltd`.

---

## 1. Tujuan Project

Membangun ulang portofolio pribadi yang **profesional, minimalis, dan clean**, menggantikan tema lama bertema "Hogwarts/Slytherin" (playful, fantasy) dengan tema **serius, korporat-ringan, dark-minimal** seperti milik manajer (Andi Ashari — `andi.ltd`).

Data konten (bio, skill, pengalaman, sosial media) **tetap diambil dari portofolio lama**, hanya tampilan/UX yang diubah total.

Sumber data lama:
- https://fiqrigustriawan.vercel.app/ (landing/hero)
- https://fiqrigustriawan.vercel.app/portfolio (detail skill & experience)

Sumber referensi desain:
- https://andi.ltd/ (struktur, tone, layout, warna, animasi)

---

## 2. Data Konten Asli (untuk dipindahkan, BUKAN tema-nya)

### 2.1 Identitas
- **Nama lengkap:** Muhammad Fiqri Agustriawan
- **Title/Role:** Fullstack Software Engineer (Backend Focus, Fullstack Capability) | AI Engineer | DevOps
- **Lokasi:** Hegarmanah, Cidadap, Bandung, Indonesia
- **Pendidikan:** SMK Telkom Makassar
- **Foto profil:** `profile_Fiqri.jpeg` (https://fiqrigustriawan.vercel.app/profile_Fiqri.jpeg)

### 2.2 Bio / Summary
> "Seorang Insinyur Perangkat Lunak Fullstack yang bersemangat, berbasis di Bandung. Keahlian utama pada **rekayasa backend** — merancang API, mengoptimalkan database, dan membangun solusi server yang skalabel."

(Bisa diterjemahkan ke Bahasa Inggris jika ingin versi internasional, mengikuti gaya `andi.ltd` yang full English.)

### 2.3 Technical Skills

**Backend (Primary)**
- Laravel
- Golang
- Node.js
- MySQL
- PostgreSQL
- API Design

**Frontend**
- React
- Next.js
- TypeScript
- Tailwind CSS
- Vite

**Tools**
- Git
- Supabase
- Firebase
- Docker
- Linux

### 2.4 Experience / Pengalaman
1. **Internship at Ashari Tech** — 2024–Present
   Developing web applications with Next.js and modern technologies.
2. **BNSP Certified Web Developer** — 2024
   Professional certification in web development.

### 2.5 Social Links / Kontak
- GitHub: https://github.com/FiqriAgustriawan
- LinkedIn: https://linkedin.com/in/fiqri-agustriawan
- Email: muhfiqri033@gmail.com
- Twitter/X handle (dari meta tag lama): @fiqriagustriawan
- Portfolio lama (alternatif): https://fiqriagustriawan.github.io

---

## 3. Referensi Desain — `andi.ltd` (Tema yang Ingin Ditiru)

### 3.1 Struktur Halaman (Single Page, Section-based, Smooth Scroll)
1. **Navbar** — fixed/sticky, minimal: logo teks kecil (`andi.ltd` style → ganti jadi nama domain/inisial Fiqri), menu: `about`, `skills`, `contact` (anchor link ke section).
2. **Hero Section (`#home`)**
   - Foto profil bulat kecil (avatar), ukuran sedang (~150–256px)
   - Label kecil di atas nama: tagline role (mis. "AI Operations & Cloud Infrastructure" → versi Fiqri: "Fullstack Software Engineer | AI Engineer | DevOps")
   - Nama besar (H1, bold, font besar)
   - Deskripsi singkat 1–2 kalimat dengan **bold pada kata kunci penting**
   - Lokasi + status ("Jakarta, Indonesia · Available Worldwide" → versi Fiqri: "Bandung, Indonesia · Open to Opportunities")
   - 2 tombol CTA: `Learn More` (scroll ke about) dan `Get in Touch` (mailto / contact)
   - Baris ikon sosial media (LinkedIn, GitHub, Twitter, Email, dst.) — ikon outline minimalis
3. **Section 01 — About (`#about`)**
   - Heading kecil "01 — About" sebagai eyebrow/label
   - Judul section: "Who I Am"
   - 2–3 paragraf naratif (gaya storytelling profesional, ada **bold** di beberapa frasa kunci dan link inline ke entitas terkait, mis. nama perusahaan)
4. **Section 02 — Expertise/Skills (`#skills`)**
   - Eyebrow "02 — Expertise"
   - Judul: "What I Do"
   - Layout 2 kolom kartu (card), masing-masing punya:
     - Kategori besar (mis. "Cloud & Infrastructure")
     - Sub-label (mis. "Platform Engineering")
     - List bullet poin keahlian
   - Di bawahnya: baris **tech badges/pills** (tag kecil dengan border, beberapa berupa link ke GitHub filter by language) — mis. Terraform, TypeScript, Golang, Python, Bash, Kubernetes, AWS, GCP
5. **Section 03 — Contact (`#contact`)**
   - Eyebrow "03 — Contact"
   - Judul besar: "Let's Work Together"
   - Paragraf ajakan singkat
   - 2 tombol: `Send Email`, `Connect on LinkedIn`
6. **Footer**
   - Copyright kecil: "© 2026 Andi Ashari. All rights reserved."
   - Quote singkat di footer (italic), mis. *"Innovation distinguishes between a leader and a follower."* → Fiqri bisa pakai quote relevan dengan engineering/ambisi.

### 3.2 Tone & Gaya Penulisan
- Bahasa Inggris formal-ringan, kalimat singkat, padat, profesional (tidak playful).
- Banyak penggunaan **bold** pada frasa kunci di tengah paragraf untuk emphasis (bukan heading).
- Penomoran section ala dokumen ("01 —", "02 —", "03 —") sebagai ciri khas struktural minimalis.
- Tidak ada elemen dekoratif berlebihan (tidak ada karakter, mascot, gambar besar artistik) — fokus tipografi & whitespace.

### 3.3 Visual / Theming (berdasarkan meta tag & struktur yang teridentifikasi)
- `theme-color`: **#111110** → dasar palet **dark/near-black** sebagai warna utama background.
- `color-scheme: light dark` → situs mendukung dark mode sebagai default dengan kemungkinan light mode toggle (tidak wajib, prioritaskan dark mode profesional).
- Estimasi palet (silakan verifikasi visual langsung saat development, karena fetch berbasis teks tidak menangkap CSS final):
  - Background utama: hitam pekat/abu sangat gelap (`#111110` atau turunannya `#0d0d0c`, `#1a1a18`)
  - Teks utama: putih/abu terang (`#f5f5f4` / `#e5e5e3`)
  - Aksen: netral (abu-abu) dengan kemungkinan 1 warna aksen halus (emas/orange muted atau biru muted — umum pada portfolio engineer minimalis), gunakan accent secukupnya hanya untuk hover/link/border.
  - Card/section divider: border tipis abu gelap (`border: 1px solid rgba(255,255,255,0.08)`), bukan shadow tebal.
- Tipografi: sans-serif modern, kemungkinan font seperti **Inter / Geist / Söhne-like**, dengan hierarki jelas: H1 besar bold, eyebrow text kecil uppercase dengan letter-spacing lebar.
- Layout: container terpusat dengan max-width sedang (~1100–1200px), padding besar antar section (vertical rhythm besar, banyak whitespace).
- Animasi (umum pada gaya situs seperti ini, perlu dikonfirmasi visual saat build):
  - Fade-in + slide-up halus saat elemen masuk viewport (scroll reveal), durasi pendek (300–600ms), easing smooth (ease-out).
  - Hover state minimal: underline halus pada link, sedikit perubahan opacity/scale pada tombol & ikon sosial.
  - Smooth scroll antar anchor section.
  - Tidak ada animasi berat/partikel/3D — semua subtle dan "quiet".
- **Catatan penting:** karena pengambilan data dilakukan via text-fetch (bukan render visual penuh), warna pasti, font-family pasti, dan detail animasi presisi (kurva easing, parallax, dsb.) sebaiknya **dikonfirmasi ulang dengan screenshot/inspect element langsung pada andi.ltd** sebelum implementasi final, agar replikasi benar-benar presisi 1:1.

---

## 4. Spesifikasi Teknis untuk Implementasi

### 4.1 Stack
- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS
- **Animasi:** Framer Motion (untuk scroll-reveal, fade/slide transitions)
- **Icon:** lucide-react atau react-icons (untuk ikon sosial media outline minimalis)
- **Font:** Inter / Geist (via `next/font`)
- **Deploy target:** Vercel (sama seperti portfolio lama)

### 4.2 Struktur Komponen yang Disarankan
```
/app
  layout.tsx
  page.tsx
/components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Experience.tsx      (opsional, tambahan dari data lama yang tidak ada di andi.ltd)
  Contact.tsx
  Footer.tsx
  SocialIcons.tsx
  SectionLabel.tsx     ("01 — About" style eyebrow)
/lib
  data.ts              (semua data profil: bio, skills, experience, social links)
```

### 4.3 Mapping Konten Lama → Section Baru
| Section andi.ltd | Isi dari data Fiqri |
|---|---|
| Hero | Nama, role, lokasi, bio singkat, foto, CTA, social icons |
| 01 — About | Versi panjang dari bio Fiqri (bisa dikembangkan dari deskripsi backend engineer) |
| 02 — Expertise / Skills | Technical Skills (Backend, Frontend, Tools) — disusun jadi 2–3 kartu kategori + tech badges |
| (Tambahan) Experience | Internship Ashari Tech, BNSP Certified Web Developer — andi.ltd tidak punya section ini secara eksplisit, bisa ditambahkan sebagai section ke-4 sebelum Contact, tetap pakai gaya eyebrow "04 — Experience" agar konsisten |
| 03 — Contact | CTA email + LinkedIn |
| Footer | Copyright + quote relevan (mis. quote tentang konsistensi/ambisi engineering) |

### 4.4 Aksesibilitas & SEO
- Pertahankan meta tag SEO yang sudah ada di portofolio lama (title, description, og:image, twitter card) — sesuaikan og:image dengan foto profesional baru jika ada.
- Gunakan semantic HTML (`<nav>`, `<section>`, `<footer>`) dan heading hierarchy yang benar.

---

## 5. Instruksi untuk AI Agent (Antigravity / Claude / Gemini)

Saat menjalankan task berdasarkan file ini:
1. Bangun project Next.js + TypeScript + Tailwind + Framer Motion baru dari awal.
2. Gunakan **data konten dari Section 2** di atas — jangan mengarang data baru.
3. Replikasi **struktur & tone** dari Section 3 (andi.ltd) sedekat mungkin: layout single-page, eyebrow numbering, dark minimal theme, scroll-reveal animation halus.
4. Sebelum finalisasi warna/animasi, **screenshot/inspect `andi.ltd` secara visual** (bukan hanya teks) untuk memastikan warna hex, font-family, dan kurva animasi benar-benar presisi.
5. Hasil akhir harus terasa **profesional, minimalis, dark-mode-first**, tanpa elemen tema lama (Hogwarts/Slytherin/fantasy) sama sekali.
6. Pastikan responsive (mobile-first) dan performant (lazy-load image, optimized font loading).

---

*File ini dibuat sebagai context engineering document, bukan kode final. Gunakan sebagai prompt/reference saat memulai sesi coding di Antigravity.*

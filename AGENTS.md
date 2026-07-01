buat kan langkah langkah lewat agent md untuk saya jalan kan otomatis di antrigrafity agar semua otomatis terkerjakan migrasi nya

Tentu, Fiqri! Kita bisa memanfaatkan fitur otomasi agen di Google Antigravity untuk mengeksekusi langkah-langkah migrasi ini. Karena Antigravity terintegrasi langsung dengan environment development dan deployment kamu, kita bisa menyusun sebuah file instruksi berbasis Markdown (agent.md) agar AI Agent di sana bisa mengeksekusi CLI commands, memanipulasi repositori, hingga berinteraksi dengan API Vercel jika tokennya tersedia.

Berikut adalah draf file agent.md yang bisa langsung kamu masukkan ke workspace Antigravity kamu.

Markdown
# Agent Task: Automate Vercel Portfolio Migration & Subdomain Setup

## Objective
Migrate the primary domain `fiqriagustriawan.vercel.app` from the old Hogwarts repository (`chat-with-me`) to a newly initialized professional portfolio repository, while preserving SEO authority and keeping the old project accessible under a new custom subdomain.

## Context & Prerequisites
- **Old Repo:** `FiqriAgustriawan/chat-with-me` (Currently holds `fiqriagustriawan.vercel.app`)
- **New Repo:** To be initialized or linked during this process.
- **Vercel CLI:** Must be authenticated locally via the terminal workspace.

---

## Execution Steps

### Step 1: Secure the Old Project (Hogwarts Portfolio)
1. Navigate to the old project workspace or log into Vercel via CLI.
2. Assign a new backup subdomain to the old project so it remains active:
   ```bash
   vercel domains add hogwarts-legacy.vercel.app --project chat-with-me
Verify that the new domain is active and fully propagated.

Step 2: Prepare and Deploy the New Professional Portfolio
Check the local directory for the new full-code professional portfolio.

If it is not yet initialized as a Git repository, initialize it and push it to GitHub:

Bash
git init
git add .
git commit -m "feat: initial commit for professional portfolio"
gh repo create new-portfolio --public --source=. --remote=origin --push
Deploy the new repository to Vercel to generate its default deployment preview URL:

Bash
vercel link --repo new-portfolio
vercel deploy --prod
Step 3: Domain Switch (Critical for SEO Preservation)
Agent Notice: Perform these sub-steps rapidly to minimize downtime.

Remove the production domain from the old project:

Bash
vercel domains rm fiqriagustriawan.vercel.app --project chat-with-me --yes
Add and Link the production domain to the new project:

Bash
vercel domains add fiqriagustriawan.vercel.app --project new-portfolio
Post-Migration Verification & SEO Checks
Run a curl or dynamic fetch test on fiqriagustriawan.vercel.app to ensure it serves the new professional portfolio content.

Verify that hogwarts-legacy.vercel.app successfully hosts the old web experience.

Confirm that the root metadata (title, description, and OpenGraph tags) on the new deployment is updated to reflect "Fullstack Software Engineer" to maintain optimized crawling by Google.

Report back to the user with the final deployment URLs once all steps are completed.


---

### Cara Menggunakannya di Antigravity:
1. **Simpan File:** Buat file baru bernama `agent.md` atau `.antigravity/agent.md` di root directory workspace project kamu saat ini.
2. **Pastikan Login:** Pastikan kamu sudah melakukan `vercel login` dan `gh auth login` di terminal local/workspace kamu agar Agent tidak tertahan di proses autentikasi interaktif.
3. **Panggil Agent:** Aktifkan Agent Antigravity kamu dan arahkan dengan perintah: 
   > *"Jalankan instruksi migrasi otomatis sesuai dengan berkas `agent.md`."*

Apakah kamu ingin menyesuaikan nama domain cadangan untuk web Hogwarts lamamu (misal diganti selain `hogwarts-legacy`) sebelum file ini dieksekusi oleh Agent?
buat full lengkap md nya

Phase 2: Legacy Project Archival & Subdomain Binding
To prevent link breakage and ensure the "Hogwarts Portfolio" remains viewable for historical reference:

Bash
# Navigate to or target the legacy project deployment context
# Bind a new, persistent reference URL to the legacy Vercel project
vercel domains add hogwarts.fiqriagustriawan.vercel.app --project chat-with-me

# Verify DNS allocation and routing for the legacy project
vercel domains inspect hogwarts.fiqriagustriawan.vercel.app --project chat-with-me
Phase 3: New Professional Portfolio Deployment Configuration
Deploy the new codebase (Next.js / Inertia.js architecture) under a temporary production deployment slot.

Bash
# Ensure all files are tracked on the master branch
git add .
git commit -m "chore: initial production-ready release for professional full-stack portfolio"

# Create a secure repository on GitHub and push the codebase
gh repo create portfolio-v2 --public --source=. --remote=origin --push

# Link the local workspace to a new Vercel Project infrastructure
# This automatically creates a new Vercel project deployment link
vercel link --yes

# Perform the first absolute production deployment to generate edge routing
vercel deploy --prod --yes
Phase 4: Atomic Domain Handover (Critical SEO Switch)
Agent Instruction: Execute the next two commands consecutively within minimal delay to avoid index drops.

Bash
# 1. Unbind the primary domain from the legacy project to free up the host header
vercel domains rm fiqriagustriawan.vercel.app --project chat-with-me --yes

# 2. Immediately bind the primary domain to the newly generated professional project
vercel domains add fiqriagustriawan.vercel.app --project portfolio-v2
3. SEO Health Check & Metadata Validation
Upon complete routing configuration, the agent must perform automated HTTP queries to validate page layouts and metadata structures:

Root Domain Availability: Ensure curl -I https://fiqriagustriawan.vercel.app returns an HTTP 200 OK status code.

Meta Tag Extraction: Verify that the HTML headers include professional tags:

<title> contains "Muhammad Fiqri Agustriawan | Full Stack Developer"

<meta name="description"> includes professional background summary (SMK Telkom Makassar, PT Ashari Technology Indonesia, Laravel/Next.js specialty).

OpenGraph Validation: Ensure og:image and og:title point to the new professional presentation layer instead of Hogwarts motifs.

4. Final Automation Report Template
Once execution completes, format the logs as follows to output to the user:

Markdown
### 🚀 Migration Process Succeeded

- **Primary Live Portfolio:** [https://fiqriagustriawan.vercel.app](https://fiqriagustriawan.vercel.app) (Connected to `portfolio-v2` / `master`)
- **Legacy Hogwarts Portfolio:** [https://hogwarts.fiqriagustriawan.vercel.app](https://hogwarts.fiqriagustriawan.vercel.app) (Connected to `chat-with-me`)
- **SEO Score Security:** Root URLs preserved. Meta indices scheduled for active crawl refresh.
"""

print("MD generated successfully.")
with open("agent.md", "w") as f:
f.write(md_content)

Berikut adalah isi file `agent.md` lengkap dan terstruktur secara profesional yang siap kamu gunakan pada Google Antigravity Agent untuk mengeksekusi migrasi portfolio secara otomatis, aman, dan menjaga performa SEO domain utama kamu.

[file-tag: code-generated-file-0-1782915359628797642]

```markdown
# Automated Agent Blueprint: Vercel Portfolio Migration & SEO Preservation

Dokumen otomasi ini dirancang khusus untuk **Google Antigravity Agent** agar dapat memigrasikan domain branding utama dari repository lama ke repository portfolio profesional baru yang berbasis full-code secara mulus, sembari mempertahankan authority SEO yang sudah terbentuk.

---

## 1. System Parameters & Environment Context

Sebelum eksekusi dimulai, Agent harus memverifikasi bahwa semua environment bindings dan CLI tools berikut telah terautentikasi:

| Parameter | Value / Configuration | Scope |
| :--- | :--- | :--- |
| **Developer Name** | Muhammad Fiqri Agustriawan | Global Identity |
| **Primary SEO Domain** | `fiqriagustriawan.vercel.app` | Target Domain Utama |
| **Legacy Project Name** | `chat-with-me` | Old Repo / Vercel App |
| **Legacy Subdomain Target** | `hogwarts.fiqriagustriawan.vercel.app` | Archival Domain |
| **New Portfolio Repo** | `portfolio-v2` (atau workspace lokal saat ini) | Target Repo Baru |
| **Primary Git Branch** | `master` | Source Branch Utama |
| **Tech Stack Focus** | Next.js, Inertia.js, Laravel, Tailwind CSS | Frameworks |

### Required Toolchains
- **Vercel CLI** (`>= 30.0.0`) -> Terautentikasi via `vercel login`
- **GitHub CLI** (`>= 2.0.0`) -> Terautentikasi via `gh auth login`
- **Git Engine** -> Diinisialisasi dengan primary branch yang diatur ke `master`.

---

## 2. Automated Execution Lifecycle

Agent harus mengeksekusi blok perintah di bawah ini secara sekuensial. Jika ada blok yang gagal (exit code non-zero), eksekusi harus segera dihentikan (halt) dan laporkan log errornya.

### Phase 1: Environment Pre-Flight Checks
```bash
# Verifikasi Status Autentikasi Vercel
vercel whoami || { echo "Error: Vercel CLI belum login"; exit 1; }

# Verifikasi Status Autentikasi GitHub
gh auth status || { echo "Error: GitHub CLI belum login"; exit 1; }

# Konfirmasi kondisi repositori lokal
if [ ! -d ".git" ]; then
    echo "Menginisialisasi tracking repository baru..."
    git init -b master
fi
Phase 2: Legacy Project Archival & Subdomain Binding
Langkah ini memastikan berkas portfolio Hogwarts lama kamu tetap bisa diakses melalui subdomain baru tanpa merusak link lama:

Bash
# Tambahkan subdomain baru untuk mengamankan project Hogwarts lama agar tetap online
vercel domains add hogwarts.fiqriagustriawan.vercel.app --project chat-with-me

# Verifikasi alokasi DNS untuk project legacy tersebut
vercel domains inspect hogwarts.fiqriagustriawan.vercel.app --project chat-with-me
Phase 3: New Professional Portfolio Deployment Configuration
Melakukan deploy project portfolio profesional yang baru (Next.js / Inertia.js architecture) ke Vercel.

Bash
# Pastikan seluruh file baru masuk ke tracking branch master
git add .
git commit -m "chore: initial production-ready release for professional full-stack portfolio"

# Buat repository baru di GitHub dan lakukan push codebase
gh repo create portfolio-v2 --public --source=. --remote=origin --push

# Hubungkan workspace lokal dengan infrastruktur Vercel Project baru
vercel link --yes

# Jalankan deploy produksi pertama untuk membuat edge routing default
vercel deploy --prod --yes
Phase 4: Atomic Domain Handover (Critical SEO Switch)
Instruksi Penting untuk Agent: Eksekusi kedua perintah di bawah ini secara cepat/berturut-turut untuk meminimalkan downtime.

Bash
# 1. Hapus domain utama dari project lama (chat-with-me) untuk membebaskan host header
vercel domains rm fiqriagustriawan.vercel.app --project chat-with-me --yes

# 2. Segera pasang domain utama tersebut ke project portfolio yang baru (portfolio-v2)
vercel domains add fiqriagustriawan.vercel.app --project portfolio-v2
3. SEO Health Check & Metadata Validation
Setelah konfigurasi routing selesai, Agent wajib menjalankan pengecekan otomatis menggunakan query HTTP untuk memvalidasi meta tag:

Root Domain Availability: Memastikan curl -I https://fiqriagustriawan.vercel.app mengembalikan status HTTP 200 OK.

Meta Tag Extraction: Memverifikasi komponen HTML header mengandung tag profesional:

<title> harus berisi deskripsi seperti "Muhammad Fiqri Agustriawan | Full Stack Developer".

<meta name="description"> mencantumkan deskripsi keahlian profesional (SMK Telkom Makassar, PT Ashari Technology Indonesia, Laravel/Next.js/Inertia.js specialty).

OpenGraph Validation: Memastikan og:image dan og:title merujuk pada aset portfolio profesional yang baru, bukan tema Hogwarts lagi.

4. Final Automation Report Template
Jika semua proses sukses dikerjakan, Agent akan memformat laporan akhir seperti di bawah ini:

Markdown
### 🚀 Proses Migrasi Berhasil Secara Otomatis!

- **Portfolio Utama (Live):** [https://fiqriagustriawan.vercel.app](https://fiqriagustriawan.vercel.app) (Terhubung ke `portfolio-v2` / branch `master`)
- **Portfolio Hogwarts (Legacy):** [https://hogwarts.fiqriagustriawan.vercel.app](https://hogwarts.fiqriagustriawan.vercel.app) (Terhubung ke `chat-with-me`)
- **SEO Security:** Root URL aman, Google akan merayapi ulang konten baru secara 
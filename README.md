# Social-Engineering-Cybersecurity

# ⚠️ KRYPT: Physical Threat & Credential Exposure Simulator

**Standard security awareness training is broken.** Employees click through boring compliance videos and ignore warning emails. But in the physical world, human curiosity takes over. When people see a QR code slapped on a parking meter, a coffee shop table, or a package, they scan it without a second thought. They trust physical objects more than digital links.

**KRYPT** is a brutalist, high-impact social engineering simulator designed to exploit that exact vulnerability. 

Our mission is to educate users on the dangers of **"Quishing" (QR Phishing)** by giving them a harmless, but highly memorable, psychological shock. By simulating a catastrophic breach and immediately following it with sticky-scroll education and a simulated dark web credential scan, KRYPT creates a lasting lesson in digital hygiene that a PowerPoint presentation simply cannot match.

## 🧠 The KRYPT Experience

* **Phase 1: The Trap (Physical Deployment)** - You deploy a physical QR code in the real world. When scanned by a personal device, it completely bypasses the target's expensive enterprise firewalls and email filters.
* **Phase 2: The Heart Attack (The Reveal)** - Users are hit with a blaring, brutalist alert screen. It induces a momentary panic before immediately revealing: *"YOU ARE SAFE. THIS WAS A TEST."*
* **Phase 3: The Kill Chain (Education)** - A sticky-scroll storytelling timeline forces the user to confront exactly how an attacker would have stolen their credentials if the QR code had been malicious.
* **Phase 4: The Interrogation Room (Dashboard)** - A high-anxiety, chaotic threat intelligence scanner where users enter their email to see if their data is already circulating on the dark web (simulated).

## 🛠 Tech Stack

* **Framework:** [Next.js (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** GitHub Pages (via GitHub Actions)

## 📂 Project Structure

```text
cyber-platform/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions pipeline for Pages deployment
├── app/
│   ├── dashboard/
│   │   └── page.tsx        # The "Interrogation Room" Scanner UI
│   ├── globals.css         # Global Tailwind imports & custom keyframes
│   ├── layout.tsx          # Next.js Root Layout
│   └── page.tsx            # The Heart Attack Reveal & Scroll Storytelling
├── next.config.ts          # Static export configuration & base paths
├── tailwind.config.ts      # Brutalist themes, colors, and heavy block shadows
└── package.json
💻 Local Development Setup
Clone the repository:

Bash

git clone https://github.com/Arvin-17/Social-Engineering-Cybersecurity.git
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Open http://localhost:3000 in your browser to view the application.

🌐 Deployment (GitHub Pages)
KRYPT is designed to be 100% serverless and deployable as a static site via GitHub Actions.

⚠️ Critical Configuration Step:
If you fork or clone this repo, you must update the next.config.ts file to match your exact GitHub repository name, or your CSS and scripts will completely break in production.

TypeScript

// inside next.config.ts
const repoName = 'YOUR_REPO_NAME'; // Update this to match your GitHub repo!

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
};
Deployment Instructions:
Commit and push your code to your main branch.

Go to your repository on GitHub.

Navigate to Settings > Pages.

Under Build and deployment, change the Source to GitHub Actions.

The deployment will trigger automatically. You can monitor the progress in the Actions tab.

🛑 Rules of Engagement & Disclaimer
KRYPT was built strictly for educational purposes, authorized red team exercises, and security awareness training. The breach scanner included in the dashboard is a simulation relying on mock data.

Do not use this UI to impersonate real brands, harvest actual credentials, or conduct unauthorized phishing campaigns. You are solely responsible for how you deploy this tool.
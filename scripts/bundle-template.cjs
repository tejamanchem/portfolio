const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const templateDir = path.join(root, 'public', 'downloads');
if (!fs.existsSync(templateDir)) fs.mkdirSync(templateDir, { recursive: true });

const stagingDir = path.join(root, 'template-staging');
if (fs.existsSync(stagingDir)) fs.rmSync(stagingDir, { recursive: true, force: true });
fs.mkdirSync(stagingDir, { recursive: true });

// Copy essential configs
const filesToCopy = [
  'index.html',
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  'tailwind.config.js',
  'postcss.config.js'
];

for (const f of filesToCopy) {
  const srcPath = path.join(root, f);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(stagingDir, f));
  }
}

// Copy src recursively
fs.cpSync(path.join(root, 'src'), path.join(stagingDir, 'src'), { recursive: true });
fs.cpSync(path.join(root, 'public'), path.join(stagingDir, 'public'), { recursive: true });

// Delete downloads inside staging public to avoid circular size
const stagingDownloads = path.join(stagingDir, 'public', 'downloads');
if (fs.existsSync(stagingDownloads)) {
  fs.rmSync(stagingDownloads, { recursive: true, force: true });
}

// Create clean README in staging
const templateReadme = `# Modern Software Engineer Portfolio & ATS Resume Starter

A high-performance, responsive portfolio website and ATS-friendly printable resume built with React 18, TypeScript, Tailwind CSS, and Vite.

## 🚀 Quick Setup (3 Minutes)

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Personalize Your Portfolio**:
   Open \`src/data/portfolio.ts\` and replace the information with your own details:
   - Your name, headline, and bio
   - Your work experience & achievements
   - Your featured projects & system architecture flows
   - Your skills & contact links (email, phone, LinkedIn, GitHub, X)

3. **Start the local dev server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Open http://localhost:5173 to view your live portfolio!

4. **Build & Deploy**:
   \`\`\`bash
   npm run build
   \`\`\`
   Deploy with 1 click to **Vercel**, **Netlify**, or **GitHub Pages**.

## 📄 ATS Resume
Your standalone printable resume is located at \`public/resume.html\`. Simply update your details and click **"Print / Save PDF"** in your browser!
`;

fs.writeFileSync(path.join(stagingDir, 'README.md'), templateReadme);

// Create ZIP using PowerShell Compress-Archive
const zipPath = path.join(templateDir, 'portfolio-starter-template.zip');
if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

console.log('Compressing template into ZIP...');
execSync(`powershell -Command "Compress-Archive -Path '${stagingDir}\\*' -DestinationPath '${zipPath}' -Force"`, { stdio: 'inherit' });

// Cleanup staging
fs.rmSync(stagingDir, { recursive: true, force: true });

console.log('Created template zip successfully at:', zipPath);

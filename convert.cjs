const fs = require('fs');
const path = require('path');

const pages = [
  { src: 'original_backup/404.html', dest: 'src/pages/404.astro', title: '404 – Página não encontrada' },
  { src: 'original_backup/index.html', dest: 'src/pages/index.astro', title: 'Trilha de Novos – Página inicial' },
  { src: 'original_backup/mapa.html', dest: 'src/pages/mapa.astro', title: 'Mapa de facilitadores' },
  { src: 'original_backup/material-de-apoio.html', dest: 'src/pages/material-de-astro.astro', title: 'Material de Apoio' },
];

// Passos 1-9
for (let i = 1; i <= 9; i++) {
  pages.push({
    src: `original_backup/passo-${i}.html`,
    dest: `src/pages/passo/${i}.astro`, // we'll create subfolder
    title: `Passo ${i}`,
  });
}

function generateAstro(html, title) {
  return `---
layout: ../layouts/Layout.astro
title: "${title}"
---

<div set:html=\`${html.replace(/`/g, '\\`')}\` />
`;
}

pages.forEach(p => {
  const html = fs.readFileSync(p.src, 'utf8');
  // Ensure destination directory exists
  const destDir = path.dirname(p.dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const astro = generateAstro(html, p.title);
  fs.writeFileSync(p.dest, astro);
  console.log(`Created ${p.dest}`);
});

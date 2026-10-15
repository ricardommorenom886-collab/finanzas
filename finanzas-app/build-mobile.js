const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const htmlPath = path.join(ROOT, 'index.html');
const cssPath = path.join(ROOT, 'vendor', 'tailwind.min.css');
const responsiveCssPath = path.join(ROOT, 'vendor', 'responsive-pro.css');
const lucidePath = path.join(ROOT, 'vendor', 'lucide.min.js');
const chartPath = path.join(ROOT, 'vendor', 'chart.umd.min.js');
const confettiPath = path.join(ROOT, 'vendor', 'confetti.browser.min.js');
const qrPath = path.join(ROOT, 'vendor', 'qrcode.min.js');
const appPath = path.join(ROOT, 'app.js');
const iconPath = path.join(ROOT, 'icons', 'icon.svg');
const outputPath = path.join(ROOT, 'FinanzasPro_Movil.html');

let html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const responsiveCss = fs.readFileSync(responsiveCssPath, 'utf8');
const lucide = fs.readFileSync(lucidePath, 'utf8');
const chart = fs.readFileSync(chartPath, 'utf8');
const confetti = fs.readFileSync(confettiPath, 'utf8');
const qrcode = fs.readFileSync(qrPath, 'utf8');
const appJs = fs.readFileSync(appPath, 'utf8');

// Convertir icono SVG a base64 Data URI para standalone total
if (fs.existsSync(iconPath)) {
  const iconSvg = fs.readFileSync(iconPath, 'utf8');
  const iconBase64 = Buffer.from(iconSvg).toString('base64');
  html = html.replace('href="./icons/icon.svg"', `href="data:image/svg+xml;base64,${iconBase64}"`);
}

// Embeber CSS compilado directamente
html = html.replace(
  /<link rel="stylesheet" href="\.\/vendor\/tailwind\.min\.css">/,
  `<style>\n/* Standalone Compiled Tailwind CSS */\n${css}\n</style>`
);

// Embeber CSS responsivo maestro
html = html.replace(
  /<link rel="stylesheet" href="\.\/vendor\/responsive-pro\.css">/,
  `<style>\n/* Master Responsive Pro CSS */\n${responsiveCss}\n</style>`
);

// Embeber librerías JavaScript de vendor
html = html.replace(
  /<script src="\.\/vendor\/lucide\.min\.js"><\/script>/,
  `<script>\n/* Lucide Icons */\n${lucide}\n</script>`
);

html = html.replace(
  /<script src="\.\/vendor\/chart\.umd\.min\.js"><\/script>/,
  `<script>\n/* Chart.js */\n${chart}\n</script>`
);

html = html.replace(
  /<script src="\.\/vendor\/confetti\.browser\.min\.js"><\/script>/,
  `<script>\n/* Canvas Confetti */\n${confetti}\n</script>`
);

html = html.replace(
  /<script src="\.\/vendor\/qrcode\.min\.js"><\/script>/,
  `<script>\n/* QRCode.js */\n${qrcode}\n</script>`
);

// Embeber lógica principal de la app
html = html.replace(
  /<script src="\.\/app\.js(?:\?[^"]*)?"><\/script>/,
  `<script>\n/* FinanzasPro Core Logic */\n${appJs}\n</script>`
);

fs.writeFileSync(outputPath, html, 'utf8');

console.log('✅ FinanzasPro_Movil.html generado exitosamente.');
console.log('Tamaño total:', (html.length / 1024).toFixed(1), 'KB (100% Autónomo, 0 peticiones externas)');

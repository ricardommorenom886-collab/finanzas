const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const jsPath = path.join(__dirname, 'app.js');
const outputPath = path.join(__dirname, 'FinanzasPro_Movil.html');

const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

const standalone = html.replace(/<script src="\.\/app\.js(?:\?[^"]*)?"><\/script>/, '<script>\n' + js + '\n</script>');
fs.writeFileSync(outputPath, standalone, 'utf8');

console.log('✅ FinanzasPro_Movil.html generado exitosamente.');
console.log('Tamaño total:', (standalone.length / 1024).toFixed(1), 'KB');

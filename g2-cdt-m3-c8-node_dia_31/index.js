const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuración del servidor
const hostname = '127.0.0.1';
const port = 3000;

// Crear servidor
const server = http.createServer((req, res) => {
  // Establecer la ruta del archivo HTML
  const filePath = path.join(__dirname, 'index.html');

  // Leer el archivo HTML
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

// Iniciar servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

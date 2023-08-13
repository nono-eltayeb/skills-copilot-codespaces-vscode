// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create a route
// 4. Create a response
// 5. Send a response
// 6. Listen on a port

// 1. Create a web server
const http = require('http');
const server = http.createServer();

// 2. Create a router
const router = require('./router');

// 3. Create a route
server.on('request', (req, res) => {
  router(req, res);
});

// 6. Listen on a port
server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});

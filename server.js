import http from 'node:http';

const PORT = 8000;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.end('Hello world!')
})

server.listen(PORT, () => `Server online on PORT ${PORT}`)
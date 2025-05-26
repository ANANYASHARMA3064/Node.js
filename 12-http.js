const http = require('http');
const server = http.createServer((req, res) => {
  if(req.url==='/'){
    res.end('welcome to our webpage')
  }
  if(req.usj ==='/about'){
    res.end('here is our short history ')
    return
  }
  res.end(`
    <h1>Oops!</h1>
    `)
});
server.listen(5001, () => {
  console.log('✅ Server is running on http://localhost:5001');
});
const http =require('http')
const server =http.createServer((req,res)=>{
    console.log('user hit the server')
    res.end('hello B words!')
})
server.listen(7080)
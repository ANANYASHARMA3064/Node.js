const http =require('http')
const server =http.createServer((req,res)=>{
    console.log(req.method)
    console.log(req.url)
    const url=req.url;
    if (url==='/'){
    // console.log('user hit the server')
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>hello B words!<h1>')
    res.end()
    }
    //about page
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>ABOUT ME : I am me<h1>')
        res.end()

    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>404 :((((((<h1>')
        res.end()

    }
    
})
server.listen(7080)

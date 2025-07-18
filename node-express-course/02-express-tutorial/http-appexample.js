const http =require('http')
const {readFileSync}=require('fs')
const homepage =readFileSync('./navbar-app/index.html')
const homestyles =readFileSync('./navbar-app/styles.css')
const homeimage =readFileSync('./navbar-app/logo.svg')
const homelogic =readFileSync('./navbar-app/browser-app.js')
 
const server =http.createServer((req,res)=>{
    console.log(req.method)
    console.log(req.url)
    const url=req.url;
    if (url==='/'){
    // console.log('user hit the server')
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
    res.end()
    }
    //about page
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>ABOUT ME : I am me<h1>')
        res.end()

    }
    // styles
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homestyles)
        res.end()

    }
    // image/logo
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeimage )
        res.end()

    }
     // logic
    else if(url==='/browser-app.js '){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeimage )
        res.end()

    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>404 :((((((<h1>')
        res.end()

    }
    
})
server.listen(7080)
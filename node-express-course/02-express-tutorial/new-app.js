const express =require('express')
const app = express()
const logger =(req,res,next )=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time) 
    next(  )
}
app.get('/',logger,(req,res)=>{
  res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.listen(8090,()=>{
    console.log('server is listening on port 8090:')
})
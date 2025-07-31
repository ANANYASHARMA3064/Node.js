const express =require('express')
const app = express()
const logger =require('./logger ')
const authorizec=require('./authorize')
const authorize = require('./authorize')
app.use(logger,authorize)
app.get('/',(req,res)=>{
  res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})
app.listen(8090,()=>{
    console.log('server is listening on port 8090:')
})
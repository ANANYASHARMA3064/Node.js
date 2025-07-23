const express=require('express')
const app =express()
const {products}=require('./data ')
app.get('/',(req,res)=>{
    res.json(products)
})
app.listen(8090,()=>{
    console.log('the server is listening on port 8090')
})
//
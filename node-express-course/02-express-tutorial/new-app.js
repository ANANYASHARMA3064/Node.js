const express =require('express');
const app = express()
app.get('/',(req,res)=>{
    console.log('hello')
    res.send('Home page')
})
app.listen(8090,()=>{
    console.log('the server is listening on port 5000') 
})

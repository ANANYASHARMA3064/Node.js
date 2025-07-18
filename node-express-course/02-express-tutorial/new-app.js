const express =require('express');
const app = express()
app.get('/',(req,res)=>{
    console.log('hello')
    res.status(200).send('Home page')
})
app.get('/about',(req,res)=>{
    console.log('hello')
    res.status(200).send('About me ')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found <h1>')
})

app.listen(8090,()=>{
    console.log('the server is listening on port 5000') 
})

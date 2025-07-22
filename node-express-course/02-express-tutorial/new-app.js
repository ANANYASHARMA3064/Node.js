const express=require('express')
const app =express()

app.get('/',(req,res)=>{
    res.json([{name:'john'},{name:susan}])
})
app.listen(8090,()=>{
    console.log('the server is listening on port 8090')
})
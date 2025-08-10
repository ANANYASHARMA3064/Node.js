const express =require('express')
const app = express()
const logger =require('./logger')
let {people}=require('./data')
//static assets
app.use(express.static('./methods-public'))
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people })
})
app.listen(8090,()=>{
    console.log('server is listening on port 8090:')
}) 
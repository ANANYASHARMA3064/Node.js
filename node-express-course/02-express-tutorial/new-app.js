const express =require('express')
const app = express()
const logger =require('./logger')
let {people}=require('./data')
//static assets
app.use(express.static('./methods-public'))
// parse from data
app.use(express.urlencoded({extended:false}))
//parse json 
app.use(express.json( ))
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people })
})
app.post('/api/people',(req,res)=>{ const {name}=req.body
    if (!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json('Success')
})
app.post('/login',(req,res )=>{
    const {name}=req.body
    if (name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please provide creadentials ')
    console.log(req.body)
    res.send('POST')
})
app.listen(8090,()=>{
    console.log('server is listening on port 8090:')
}) 
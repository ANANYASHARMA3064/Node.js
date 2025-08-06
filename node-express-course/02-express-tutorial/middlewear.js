const authorizec=require('./authorize')
const authorize = require('./authorize')
// app.use([logger,authorize])
app.use(express.static('./public'))
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
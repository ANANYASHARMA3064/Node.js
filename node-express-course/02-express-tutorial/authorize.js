const authorize =(req,res,next)=>{
    const {user}= req.query;
    if (user==='John'){
        req.user={name:'John',id:3}
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
    console.log('authorize')
}
module.exports =authorize 
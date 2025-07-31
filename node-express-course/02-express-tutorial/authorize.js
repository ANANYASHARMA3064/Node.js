const authorize =(req,res,next)=>{
    const {user}= req.query;
    if (user==='John'){
        req.user
    }
    console.log('authorize')
}
module.exports =authorize 
const EventEmitter =require('events')
const coustomEmitter =new EventEmitter()
coustomEmitter.on('response',()=>{
    console.log(`data recieved`)

})
customEmmiter.emit('response',()=>{
    console.log(`some other logic here`)
})
customEmmiter.emitter('response')
 

 
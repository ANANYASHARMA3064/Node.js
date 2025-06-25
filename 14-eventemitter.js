const EventEmitter =require('events')
const coustomEmitter =new EventEmitter()
coustomEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} with ID:${id}`)

})
// You’re creating a custom object that:

// Already comes with methods like .on() and .emit()

// But yes — you can also add your own functions and properties to it like any other object


coustomEmitter.on('response',()=>{
    console.log(`some other logic`)
})
coustomEmitter.emit('response','John',34) 
 

    
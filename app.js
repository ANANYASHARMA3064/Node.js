//npm --global command,comes with node 
//npm --version
//local dependency -use it only in this particular project 
// npm i <packagename>
// global dependency -use it in any project 
// npm install -g<oackagename>
// sudo npm install -g<packagename>(mac)
const _ =require('lodash')
const items =[1,[2,3],4]
const newItems = _.flattenDeep(items)
console.log(newItems)




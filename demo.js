var _ = require('lodash')
var fs = require('fs')
var data = require('./data.json')
var writeData = {
    instrument:'guitar',
    key:'g',
    strings:'6'
}

console.log(_.random(1,100))

fs.readFile('./data.json', 'utf-8', (err,data)=>{
    var data = JSON.parse(data)
    console.log(data.position)
})

console.log("this shit means that " + data.name)
console.log("and you must sit "+data.position+" !")

fs.readdir('c:/wamp64/www/', (err,data) =>{
    console.log(data)
})

// fs.appendFile('./data.json', JSON.stringify(writeData), (err)=>{
//     console.log("file appended unless error here --> ", err)
// })
fs.writeFile('writtenData.json', JSON.stringify(writeData), (err) =>{
    console.log("done with whatever errors this mofo says here --> ", err)
})
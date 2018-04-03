var fs = require('fs');
var config = require("./config.js")

function Aural(name, schema, voice){
    this.name = name
    this.schema = schema
    this.voice = voice
}

function Entry()

function printAural(schema) {
  console.log(schema.name)
  console.log(schema.schema)
  console.log(schema.voice)
}


function writeToFile(str){
  fs.writeFile(config.file, str, (err) => {
    if (err)
        throw error
    else {
      console.log('logged!')
    }
  })
}

function addEntry()

function main(){
    var file = fs.readFileSync(config.file, config.encoding);

    if (file)
      writeToFile(file.substring(0, file.length-2) + ',\n\t' + JSON.stringify(config.schema) + '\n]', file)
    else {
      writeToFile('[\n\t' + JSON.stringify(config.schema) + '\n]', file)
    }
    var db = new Aural(config.name, config.schema, config.voice)
    //printAural(db)
    // fetchResponse(myData, arg)
    //    var myData = JSON.parse(file)
}

main();




// function fetchResponse(myData, arg) {
//     var user = arg.toLowerCase().split(' ')
//     var search;
//
//     var regex1 = RegExp('foo*','g');
//     console.log(regex1)
//     for (i = 0; i < user.length; i++){
//          search = new RegExp(user[i].toLowerCase() + "*/")
//
//         console.log(search.exec("hey"))
//          console.log(search)
//     }
//     var expr = "";
// }


/*
        for (i = 0; i < myData.length; i++){
            if (myData[i].phrase == arg.toLowerCase())
                console.log(myData[i].response)
        }
        */



// phrase = myData[i].phrase.split(' ')
// for (x = 0; x < phrase.length; x++){
//     if (phrase[x] = user[x])
//         count++
// }
// if (count > (parseInt(wordCount * .75))) {
//     console.log(myData[i].response)
//     break
// }
// else {
//     count = 0
// }

// console.log('phrase ' + phrase)
// //console.log(myData[i].phrase + ' ' + arg.toLowerCase())
// // if (arg.toLowerCase() == myData[i].phrase){
// //     console.log(myData[i].response)
// // }

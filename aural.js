const fs = require('fs');
const config = require("./config.js")
const readline = require('readline');
const chalk = require('chalk')

function Aural(name, schema, voice){
    this.name = name
    this.schema = schema
    this.voice = voice
}

function printAural(schema) {
  console.log(schema.name)
  console.log(schema.schema)
  console.log(schema.voice)
}


function writeToFile(str) {
  fs.writeFile(config.file, str, (err) => {
    if (err)
        throw error
    else {
      console.log('logged!')
    }
  })
}


function removeEntry(config) {
  var file = fs.readFileSync(config.file, config.encoding);

  if (file) {
    // console.log(file)
    var entries = JSON.parse(file)
    if (entries.numEntries > 0){
      entries.entries.pop()
      entries.numEntries -= 1
      console.log(entries)
      writeToFile(JSON.stringify(entries))
    }
    else {
      console.log('No data to remove!')
    }
  }
}

function addEntry(config){
  var file = fs.readFileSync(config.file, config.encoding);

  if (file) {
    var entries = JSON.parse(file)
    console.log(entries)
    if (entries.configPresent) {
      entries.numEntries += 1
      entries.entries.push(config.schema)
      writeToFile(JSON.stringify(entries))
    }
  }
  else {
      var entry = config
      entry.configPresent = true
      writeToFile(JSON.stringify(entry))
  }
}

function readLine(){
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  chalk.green(console.log("Press\n'a' to add an entry\n'r' to remove an entry\n'q' or 'exit' to quit"))
  rl.on('line', function(line){
    if (line == 'a')
      addEntry(config)
    else if (line == 'r')
      removeEntry(config)
    else if (line == 'exit' || line == 'quit' || line == 'q')
      process.exit(1)
  })
}
function main(){

    readLine()
  //  var db = new Aural(config.name, config.schema, config.voice)
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

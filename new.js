var fs = require('fs');

function main(){
    var file = fs.readFileSync('kift.json', 'utf8');
    var myData = JSON.parse(file)
    var arg = "Whats the"
    var user = arg.toLowerCase().split(' ')
    var wordCount = arg.split(' ').length
    count = 0

    for (i = 0; i < myData.length; i++){
        
    }
}

main();











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

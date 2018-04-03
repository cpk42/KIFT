var fs = require('fs');

function fetchResponse(myData, arg) {
    var user = arg.toLowerCase().split(' ')
    var search;

    var regex1 = RegExp('foo*','g');
    console.log(regex1)
    for (i = 0; i < user.length; i++){
         search = new RegExp(user[i].toLowerCase() + "*/")

        console.log(search.exec("hey"))
         console.log(search)
    }
    var expr = "";
}

function main(){
    var file = fs.readFileSync('kift.json', 'utf8');
    var myData = JSON.parse(file)
    var arg = "hey kift"

    fetchResponse(myData, arg)
}

main();







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

const Aural = require('../../server/db/aural.js')
const Say = require('saysay')
const API = require('./wunderground.js')
const mignon = require('mignon');

var schema = {
    "phrase": '',
    "response": '',
    "file": ''
}

var en1 = {
    "phrase": 'whats the weather',
    "response": API.wunderground,
    "file": ''
}

var en2 = {
    "phrase": 'hey kift',
    "response": 'hello human',
    "file": 'hi.wav'
}

var en3 = {
    "phrase": '',
    "response": '',
    "file": ''
}

var en4 = {
    "phrase": '',
    "response": '',
    "file": ''
}

const db = new Aural('kiftdb', './server/db/db.json', schema)
// apidb.init()
// db.clear()
// db.init()
// db.addEntry(en1)
// db.addEntry(en2)
 // db.listEntries()

mignon(API.google)

class Retrieval {
    constructor() {
        this.response = '',
        this.file = ''
    }

    fetch(phrase) {
        return new Promise((resolve, reject) => {
                for (var i = 0; i < db.numEntries(); i++) {
                    if (db.getEntry(i).phrase == phrase) {
                        this.file = db.getEntry(i).file
                        resolve(db.getEntry(i).response)
                    }
                }
            })
            .then((res) => {
                this.response = res
            })
            .catch((err) => {
                console.log(('not a valid command'))
                console.log(err)
            })
    }
}

module.exports = Retrieval;



// this.user = [],
// this.log = [],
// console.log(db)
// console.log(db.getEntry(i))

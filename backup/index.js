const Retrieval = require('./retrieve.js')

var phrase = 'hey kift'
var response = new Retrieval()
response.fetch(phrase)
.then((ret) => {
    console.log(response)
})

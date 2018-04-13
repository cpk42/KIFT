const mignon = require('mignon');
const http = require('http');
const fetch = require('node-fetch');
const googleApiKey = 'AIzaSyAYz0t6AwH9ym2eB8QD6EvLSBvIRhoWM00'
const googlecx = '014596524076454628828:yfwpsppz0bm'

module.exports = {
    google: function(query) {
        mignon(function*(){
            let data = 'https://www.googleapis.com/customsearch/v1?key=' + googleApiKey + '&cx=' + googlecx + '&q=' + query,
            res = yield fetch(data),
            post = yield res.json()
            console.log('\n' + post.items[0].title + '\n')
            console.log(post.items[0].snippet + '\n')
            console.log(post.items[0].link)
        })
        // googleFetch(query)
        // .then((res) => {
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    },
    wunderground: function() {
        mignon(function*(){
            let data = 'http://api.wunderground.com/api/6ece133234606707/conditions/q/CA/fremont.json',
            res = yield fetch(data),
            post = yield res.json()
            console.log(post.current_observation)
            console.log('The weather is currently ' + post.current_observation.weather + '\n' + 'With wind ' + post.current_observation.wind_string.toLowerCase() + '\n' + 'The current temperature is ' + post.current_observation.temperature_string)
        })
    },
    ft_api: function(apiKey, secret) {
        return new Promise((resolve, reject) => {
            process.stdout.write("Authenticating...");
            request
                .post('https://api.intra.42.fr/oauth/token')
                .send({
                    grant_type: "client_credentials",
                    client_id: process.env.B42UID,
                    client_secret: process.env.B42SECRET
                })
                .then((res) => {

                    log(chalk.green("      ✓ ") + "Success!\n");
                    resolve(res.body);
                })
                .catch((err) => {
                    log(chalk.red("      𐄂 ") + "Failure.\n");
                    reject(err);
                });
        });
    }
}



// module.exports
// mignon(function*() {
//     let data = 'https://jsonplaceholder.typicode.com/posts/1',
//         res = yield fetch(data),
//         post = yield res.json()
//     console.log(data)
//     //     h1   = marked(`# ${post.id}`),
//     //     p    = marked(post.title),
//     //     listItems = post.body.split('\n').map((elem) => { return elem = `* ${elem}`; }),
//     //     ul = marked(listItems.join('\n')),
//     //     html = `${h1}${p}${ul}`;
//     // console.log(`Your new html file:\n${html}`);
//     // fs.writeFile("index.html", html, (err) => { if (err) { return console.log(err); }; console.log("index.html was saved!"); });
// });




// .get('http://api.wunderground.com/api/6ece133234606707/features/settings/q/forecast.json')
// .query({ action: 'edit', city: 'London' }) // query string
// .use(prefix) // Prefixes *only* this request
// .use(nocache) // Prevents caching of *only* this request
// .end((err, res) => {
//   // Do something
// });

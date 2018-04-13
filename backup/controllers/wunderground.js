const request = require('superagent');
const http = require('http');
const fetch = require('node-fetch');
// const marked = require('marked');
// const fs = require('fs');





//AIzaSyAniOY0rr4IkY24yyrciNevE480h2u0XT4
//AIzaSyAniOY0rr4IkY24yyrciNevE480h2u0XT4
module.exports = {
    google: function *() {
        let data = 'https://www.googleapis.com/customsearch/v1/',
            res = yield fetch(data),
            post = yield res.json()
            console.log(post)
                    //     h1 = marked(`# ${post.id}`),
                    //     p    = marked(post.title),
                    //     listItems = post.body.split('\n').map((elem) => { return elem = `* ${elem}`; }),
                    //     ul = marked(listItems.join('\n')),
                    //     html = `${h1}${p}${ul}`;
                    // console.log(`Your new html file:\n${html}`);
                    // fs.writeFile("index.html", html, (err) => { if (err) { return console.log(err); }; console.log("index.html was saved!"); });
    },
    wunder: function *() {
        let data = 'http://api.wunderground.com/api/6ece133234606707/conditions/q/CA/fremont.json',
        res = yield fetch(data),
        post = yield res.json()
        console.log(post.current_observation.weather + '\n' + post.current_observation.temperature_string + '\n')
        // request
        //     .get('http://api.wunderground.com/api/6ece133234606707/conditions/q/CA/Fremont/simpleforecast.json')
        //     .then((res) => {
        //         console.log(res.simpleforecast)
        //     })
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

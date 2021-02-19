const { response } = require('express');
const https = require('https');
let options = {
    hostname:'douban.uieee.com',
    port:443,
    method:"GET",
    path:'/v2/movie/coming_soon'
}

let request = https.request(options,(response) => {
    console.log(response);
})

request.on('error',(err) => {
    console.log(err);
})

request.end();
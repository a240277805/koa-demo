/**
 * Created by zmk on 2017/8/16.
 */
var request = require('request');
 setTimeout(function(){
    for(let i=0;i<4;i++){
        request('http://localhost:3000', function (error, response, body) {
            console.log("--------------begin-------------------");
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            console.log("--------------end-------------------");
        });
    }
 },1)
var util = require("./util");

var arr = [];
var handler = function(req, next) {
    var x = Math.random();
    console.log("req:",req.val,"x",x );
    if(x> 0.5 && x < 0.6) {
        next("error message!")
    }
    else{
        req.val = x;
        next();
    }
}

arr.push(handler);
arr.push(handler);
arr.push(handler);
arr.push(handler);
var req = {};
req.val = 1020;
util.foreachhandler( arr, req, function(err) {
    if(err) {
        console.log(err);
    }
})

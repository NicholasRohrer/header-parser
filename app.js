// require all installed modules
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var useragent = require("express-useragent");

// instantiate app
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var api = '/api/whoami';

// call to backend api, response in JSON
app.get(api, function(req, res){
    var ip       = req.ip;
    var lang     = req.acceptsLanguages()[0];
    var browser  = req.useragent["browser"];
    var os       = req.useragent["os"];
    var platform = req.useragent["platform"];
    
    res.json(
        {
            'IPaddress': ip,
            'language': lang,
            'platform': platform,
            'os': os,
            'browser': browser
        }
    ); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started on port " + process.env.PORT);
});
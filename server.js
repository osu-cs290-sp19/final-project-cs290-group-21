var express = require("express");
var exphbs = require('express-handlebars');

var MongoClient = require('mongodb').MongoClient;
var app = express();

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//send to homepage
app.get('/', function(req, res, next){
    res.status(200).render('homePage');
});

//404 if page doesn't exist
app.get('*', function (req, res, next) {
    res.status(404).render('404');
});

//starts up server
MongoClient.connect(mongoUrl, function (err, client) {
    if(err){
        throw err;
    }
    db = client.db(mongoDBName);
    app.listen(port, function(){
        console.log("Server listening on port ", port);
    });
});
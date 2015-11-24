// DO NOT CHANGE!
//init app with express, util, body-parser, csv2json
var express = require('express');
var app = express();
var sys = require('util');
var path = require('path');
var bodyParser = require('body-parser');
var Converter = require("csvtojson").Converter;

//register body-parser to handle json from res / req
app.use( bodyParser.json() );

//register public dir to serve static files (html, css, js)
app.use( express.static( path.join(__dirname, "public") ) );

// END DO NOT CHANGE!

/**************************************************************************
****************************** csv2json *********************************
**************************************************************************/

// Aufgabe 1
var json_obj = [];


var converter = new Converter({});

converter.on("end_parsed", function (jsonArray) {
    json_obj = jsonArray;
});

//read from file
require("fs").createReadStream("./world_data.csv").pipe(converter);


/**************************************************************************
********************** handle HTTP METHODS ***********************
**************************************************************************/

// Aufgabe 2

app.get('/items', function (req, res) {
    res.json(json_obj);
});

app.get('/items/:id', function (req, res) {
    var id = req.params.id;

    if(id > json_obj.length){
        res.send("No such id " + id + " in database.");
    }else if(id < 1) {
        res.send("No such id " + id + " in database.");
    }

    var user = json_obj[id - 1];
    res.json(user);
});


app.get('/items/:id1/:id2', function (req, res) {
    var id1 = req.params.id1;
    var id2 = req.params.id2;
    var solution = [];

    for( i = id1 - 1; i <= id2 - 1; i++){
        console.log(i);

        solution.push(json_obj[i]);
    }
    res.json(solution);
});


app.get('/properties', function (req, res) {

    var keys = [];
    for (key in json_obj[0]) {
        keys.push(key);
    }
    res.json(keys);
});

app.get('/properties/:num', function (req, res) {
    var num = req.params.num;
    var keys = [];
    for (key in json_obj[0]) {
        keys.push(key);
    }

    res.json(keys[num]);
});

// DO NOT CHANGE!
// bind server to port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
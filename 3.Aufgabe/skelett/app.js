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
//GET Calls

// gibt alle Länder mit allen Properties zurück
app.get('/items', function (req, res) {
    res.json(json_obj);
});

// gibt ein Land mit id und allen Properties zurück, Wenn id nicht vorhanden: Status „No such id in database.“
app.get('/items/:id', function (req, res) {
    var id = req.params.id;
// wenn id größer als das oben erzeugte Array ist, gibt es die Meldung „No such id  in database. aus
    if(id > json_obj.length){
        res.send("No such id " + id + " in database.");
        // oder wenn id kleiner 1 ist, gibt es die Meldung auch „No such id in database. aus
    }else if(id < 1) {
        res.send("No such id " + id + " in database.");
    }

    var user = json_obj[id - 1];
    // Ausgabe von der id mit den dazugehörigen Properties
    res.json(user);
});


// gibt alle Länder zwischen id1 und id2 mit allen Properties zurück, wenn Range nicht existiert: Status „Range not possible.“
app.get('/items/:id1/:id2', function (req, res) {
    // Variablen für die 2 id's anlegen
    var id1 = req.params.id1;
    var id2 = req.params.id2;
    // erzeugen von ergebnis array
    var solution = [];

    if(id1 > id2){
        return res.send("Range not possible.");
    }else if(id1 > json_obj.length){
        return res.send("Range not possible.");
    }else if(id2 > json_obj.length){
        return res.send("Range not possible.");
    }


    for( i = id1 - 1; i <= id2 - 1; i++){
        // console.log(i);
        solution.push(json_obj[i]);
         }

    // Ausgabe von Array zwischen id1 und id2
    res.json(solution);
});

// gibt alle Properties zurück (id, name, birth_rate_per ...)
app.get('/properties', function (req, res) {

    // Array anlegen
    var keys = [];
    for (key in json_obj[0]) {
        keys.push(key);
    }
    // Ausagabe von den Properties(id, name, birth_rate_per ...)
    res.json(keys);
});


// gibt Property mit der Nummer: num zurück, wenn num nicht vorhanden: Status: „No such property available.“
app.get('/properties/:num', function (req, res) {
    var num = req.params.num;
    var keys = [];


    if(num > json_obj.length){
        return res.send("No such property available.");
    }else if(num < 1){
        return res.send("No such property available.");
    }


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
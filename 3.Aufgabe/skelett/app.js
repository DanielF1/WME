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

// gibt alle Laender mit allen Properties zurueck
app.get('/items', function (req, res) {
    res.json(json_obj);
});

// gibt ein Land mit id und allen Properties zurueck, Wenn id nicht vorhanden: Status "No such id in database."
app.get('/items/:id', function (req, res) {
    var id = req.params.id;
// wenn id groesser als das oben erzeugte Array ist, gibt es die Meldung "No such id in database." aus
    if(id > json_obj.length){
        console.log("No such id " + id + " in database.");
        // oder wenn id kleiner 1 ist, gibt es die Meldung auch "No such id in database." aus
    }else if(id < 1) {
        console.log("No such id " + id + " in database.");
    }else {

        var user = json_obj[id-1];
        // Ausgabe von der id mit den dazugehoerigen Properties
        res.json(user);
    }
});


// gibt alle Laender zwischen id1 und id2 mit allen Properties zurueck, wenn Range nicht existiert: Status "Range not possible."
app.get('/items/:id1/:id2', function (req, res) {
    // Variablen fuer die 2 id's anlegen
    var id1 = req.params.id1;
    var id2 = req.params.id2;
    // erzeugen von ergebnis array
    var solution = [];

    if(id1 > id2){
        console.log("Range not possible.");
    }else if(id1 > json_obj.length){
        console.log("Range not possible.");
    }else if(id2 > json_obj.length){
        console.log("Range not possible.");
    }else{
        for( i = id1 - 1; i <= id2 - 1; i++){
            solution.push(json_obj[i]);
        }
    // Ausgabe von Array zwischen id1 und id2
    res.json(solution);
    }
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


// gibt Property mit der Nummer: num zurueck, wenn num nicht vorhanden: Status: "No such property available."
app.get('/properties/:num', function (req, res){
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

//POST-Calls
app.post('/items', function(req, res){

    //Anlegen der ID des neuen Country-Objektes
    var lastChild = json_obj[json_obj.length - 1];
    var id_old_split = lastChild["id"].split("0");

    var id_old_int = Number(id_old_split[1]);
    var id_new_int = id_old_int + 1;

    //Fallunterscheidung zwischen einstelligen und zweistelligen Zahlen fuer richtige Formatierung
    if(id_old_int < 10){
        var id_new = "00" + id_new_int.toString();
    }else {
        var id_new = "0" + id_new_int.toString();
    }

    var newItem = req.body;
    newItem["id"] = id_new;

    json_obj.push(newItem);

    res.send("Added Country " + req.body.name + " to list!");
});

//DELETE Calls
app.delete('/items', function(req, res) {

    var id = json_obj.length;
    var name = json_obj[id - 1]["name"];

    //letztes Element aus dem JSON-File wird gelöscht
    json_obj.pop();

    res.send("Deleted last country: " + name + "!");
});

app.delete('/items/:id', function(req, res) {

    var id = req.params.id;

    if(id.length == 1){
        id = "00" + id;
    }else if(id.length == 2){
        id = "0" + id;
    }

    success = new Boolean(false);

    for(i = 0; i < json_obj.length; i++){
        if(json_obj[i]["id"] == id){
            json_obj.splice(i,1);
            success = true;
            res.send("Item " + id + " deleted successfully.")
        }
    }

    if(success == false){
        res.send("No such id " + id + " in database.");
    }
});


// DO NOT CHANGE!
// bind server to port
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
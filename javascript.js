var table = document.getElementsByClassName("table");
var table_absteigend = document.getElementsByClassName("table_absteigend");

function sortTableFromTop(){

    document.getElementById("table1").style.display = "none";
    document.getElementById("table2").style.display ='block';

}

function sortTableFromBot(){

    document.getElementById("table2").style.display = "none";
    document.getElementById("table1").style.display ='block';

}

function visibility_birth() {

    var tds = document.getElementsByClassName("birth");

    switch(document.getElementById("toggle-1").checked){
        case true:
            for(var i=0; i<tds.length; i++){
            tds.item(i).style.display = "none";
        }break;
        case false:
        for (var i = 0; i < tds.length; i++) {
            tds.item(i).style.display = "table-cell";
        }break;
    }
}

function visibility_birth2() {

    var tds = document.getElementsByClassName("birth");

    switch(document.getElementById("toggle-6").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}


function visibility_cells() {
    var tds = document.getElementsByClassName("cells");

    switch(document.getElementById("toggle-2").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}

function visibility_cells2() {
    var tds = document.getElementsByClassName("cells");

    switch(document.getElementById("toggle-7").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}

function visibility_kids() {
    var tds = document.getElementsByClassName("kids");

    switch(document.getElementById("toggle-3").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}

function visibility_kids2() {
    var tds = document.getElementsByClassName("kids");

    switch(document.getElementById("toggle-8").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}

function visibility_electro() {
    var tds = document.getElementsByClassName("electro");

    switch(document.getElementById("toggle-4").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}

function visibility_electro2() {
    var tds = document.getElementsByClassName("electro");

    switch(document.getElementById("toggle-9").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}

function visibility_internet() {
    var tds = document.getElementsByClassName("internet");

    switch(document.getElementById("toggle-5").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}

function visibility_internet2() {
    var tds = document.getElementsByClassName("internet");

    switch(document.getElementById("toggle-10").checked){
        case true:
            for(var i=0; i<tds.length; i++){
                tds.item(i).style.display = "none";
            }break;
        case false:
            for (var i = 0; i < tds.length; i++) {
                tds.item(i).style.display = "table-cell";
            }break;
    }
}
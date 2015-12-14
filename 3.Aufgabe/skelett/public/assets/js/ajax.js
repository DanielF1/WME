$(document).ready(function(){

    reload();

    //Filter des Tabelleninhalts nach einer ID oder eines ID-Bereiches
    $('#add_submit').click(function() {

            var id = $('#country_filter_id').val();
            var range = $('#country_filter_range').val().split('-');

            if(range.length > 1){
                $.ajax({
                    type: "GET",
                    url: "http://localhost:3000/items/" + range[0] + "/" + range[1],
                    async: true,
                    success: function (data) {

                        $('#table_body').text("");

                        var tr = [];
                        for (var i = 0; i < data.length; i++) {
                            tr.push('<tr>');
                            tr.push("<td>" + data[i]["id"] + "</td>");
                            tr.push("<td>" + data[i]["name"] + "</td>");
                            tr.push("<td>" + data[i]["birth rate per 1000"] + "</td>");
                            tr.push("<td>" + data[i]["cell phones per 100"] + "</td>");
                            tr.push("<td>" + data[i]["children per woman"] + "</td>");
                            tr.push("<td>" + data[i]["electricity consumption per capita"] + "</td>");
                            tr.push("<td>" + data[i]["internet user per 100"] + "</td>");
                            tr.push('</tr>');
                        }
                        $('#table_body').append($(tr.join('')));
                    },
                    error: function (jqXHR, text, err) {
                        console.log(jqXHR);
                        console.log(text);
                        console.log(err);
                    }
                })
            }

            else{
                $.ajax({
                    type: "GET",
                    url: "http://localhost:3000/items/"+id,
                    async: true,
                    success: function(data) {

                        $('#table_body').text("");
                        var tr=[];
                        tr.push('<tr>');
                        tr.push("<td>" + data["id"] + "</td>");
                        tr.push("<td>" + data["name"] + "</td>");
                        tr.push("<td>" + data["birth rate per 1000"] + "</td>");
                        tr.push("<td>" + data["cell phones per 100"] + "</td>");
                        tr.push("<td>" + data["children per woman"] + "</td>");
                        tr.push("<td>" + data["electricity consumption per capita"] + "</td>");
                        tr.push("<td>" + data["internet user per 100"] + "</td>");
                        tr.push('</tr>');

                        $('#table_body').append($(tr.join('')));


                    },
                    error: function(jqXHR, text, err) {
                        console.log(jqXHR);
                        console.log(text);
                        console.log(err);
                    }
                })
            }
    });

    //Anzeigen der Properties in dem Select-Menue
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/properties",
        async: true,
        success: function(data) {

            for(i = 0; i < data.length; i++){
                var opt = document.createElement('option');
                opt.innerHTML = data[i];
                opt.value = i;
                $('#prop_selection').append(opt);
            }
        },
        error: function(jqXHR, text, err) {
            console.log(jqXHR);
            console.log(text);
            console.log(err);
        }
    });

    //Show/Hide der Properties
    $('#show_selected_prop').click(function(){

        var num = $('prop_selection').val();

        $.ajax({
            type: "GET",
            url: "http://localhost:3000/properties/" + num,
            async: true,
            success: function(data) {

                var number = data.val();

                $('td:nth-child(number),th:nth-child(number)').show();

            },
            error: function(jqXHR, text, err) {
                console.log(jqXHR);
                console.log(text);
                console.log(err);
            }
        });
    });

    //Hinzufuegen eines neuen Landes mithilfe des HTML-Formulares (Klick-Event)
    $('#submit').click(function() {

        var newCountry = new Object();
        newCountry = {id: "-1", name : $('#country_name').val(),
                        "birth rate per 1000" : $('#country_birth').val(),
                        "cell phones per 100" : $('#country_cellphone').val()
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/items",
            async: true,
            contentType: 'application/json',
            dataType: 'json',
            success: function (data) {

                console.log(data);

            },
            data: JSON.stringify(newCountry),

            error: function (jqXHR, text, err) {
                console.log(jqXHR);
                console.log(text);
                console.log(err);
            }
        })

        reload();

    });

    //Loeschen eines Tabelleneintrags mit Fallunterscheidung bezüglich des ID-Feldes (Klick-Event)
    $('#rm_submit').click(function() {

        var id = $('#country_delete_id').val().toString();

        if(id == null) {
            $.ajax({
                type: "DELETE",
                url: "http://localhost:3000/items",
                async: true,
                success: function (data) {
                    alert(data);
                },
                error: function (jqXHR, text, err) {
                    console.log(jqXHR);
                    console.log(text);
                    console.log(err);
                }
            })
        }else{
            $.ajax({
                type: "DELETE",
                url: "http://localhost:3000/items/"+id,
                async: true,
                success: function(data) {
                    alert(data);
                },
                error: function(jqXHR, text, err) {
                    console.log(jqXHR);
                    console.log(text);
                    console.log(err);
                }
            });
        }

        reload();

    });
});

//Tabellen-Inhalt wird neugeladen
function reload(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/items",
        async: true,
        success: function(data) {

            $('#table_body').text("");
            var tr=[];
            for (var i = 0; i < data.length; i++) {
                tr.push('<tr>');
                tr.push("<td>" + data[i]["id"] + "</td>");
                tr.push("<td>" + data[i]["name"] + "</td>");
                tr.push("<td>" + data[i]["birth rate per 1000"] + "</td>");
                tr.push("<td>" + data[i]["cell phones per 100"] + "</td>");
                tr.push("<td>" + data[i]["children per woman"] + "</td>");
                tr.push("<td>" + data[i]["electricity consumption per capita"] + "</td>");
                tr.push("<td>" + data[i]["internet user per 100"] + "</td>");
                tr.push('</tr>');
            }
            $('#table_body').append($(tr.join('')));

        },
        error: function(jqXHR, text, err) {
            console.log(jqXHR);
            console.log(text);
            console.log(err);
        }
    })
};
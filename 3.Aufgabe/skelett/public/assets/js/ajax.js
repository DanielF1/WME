$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/items",
        async: true,
        success: function(data) {

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
    }),

    $('#add_submit').click(function() {

            var id = $('#country_filter_id').val();
            var range = $('#country_filter_range').val().split('-');



          //  if (range != empty) {
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


                        console.log(data);
                    },
                    error: function (jqXHR, text, err) {
                        console.log(jqXHR);
                        console.log(text);
                        console.log(err);
                    }
                })
         /*   }
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
                })}*/
        })});







// ignore this first line (its fidle mock) and it will return what ever you pass as json:... parameter... consider to change it to your ajax call
$.ajax({
    url: 'https://amatherne.github.io/capital-studios/javascripts/data/cw_energy.json',
    type: "post",
    dataType: "json",
    // data: {
    //     json: JSON.stringify([
    //         {
    //         id: 1,
    //         firstName: "Peter",
    //         lastName: "Jhons"},
    //     {
    //         id: 2,
    //         firstName: "David",
    //         lastName: "Bowie"}
    //     ]),
    //     delay: 3
    // },
    success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#energy").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.Unit + "</td>"));
    row.append($("<td>" + rowData.phase + "</td>"));
    row.append($("<td>" + rowData.kWH + "</td>"));
}




// ignore this first line (its fidle mock) and it will return what ever you pass as json:... parameter... consider to change it to your ajax call
$.ajax({
    url: 'https://amatherne.github.io/capital-studios/javascripts/data/cs_water.json',
    type: "post",
    dataType: "json",
    // data: {
    //     json: JSON.stringify([
    //         {
    //         id: 1,
    //         firstName: "Peter",
    //         lastName: "Jhons"},
    //     {
    //         id: 2,
    //         firstName: "David",
    //         lastName: "Bowie"}
    //     ]),
    //     delay: 3
    // },
    success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
        drawTable1(data);
    }
});

function drawTable1(data1) {
    for (var i = 0; i < data1.length; i++) {
        drawRow1(data1[i]);
    }
}

function drawRow1(rowData1) {
    var row1 = $("<tr />")
    $("#water").append(row1); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row1.append($("<td>" + rowData1.Unit + "</td>"));
    row1.append($("<td>" + rowData1.meter_type + "</td>"));
    row1.append($("<td>" + rowData1.gallons + "</td>"));
}

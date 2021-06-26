
var dataTable = data;

var tbody = d3.select("tbody");

data.forEach(function(dataTable) {
   
    var row = tbody.append("tr");

    Object.entries(dataTable).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

//select the button
var button = d3.select("#filter-btn");
//select the form
var form = d3.select("#datetime");

//
button.on("click", runFilter);
form.on("submit", runFilter);

//NOTE: dont forget: you need # for ID elements!
function runFilter() {
    d3.event.preventDefault();
//select element and get raw html code
    var inputElement = d3.select("#datetime");
//get value property of inputelement
    var inputValue = inputElement.property("value");

//use form input to filter data by datetime
    var filteredData = dataTable.filter(sighting => sighting.datetime === inputValue);
    console.log(inputValue);
    console.log(filteredData);

    tbody.html("");
   
//you have to loop and add the data !
    filteredData.forEach(function(item) {
        trow = tbody.append("tr");
        tbody.append(`td`).text(item.datetime);
        tbody.append(`td`).text(item.city);
        tbody.append(`td`).text(item.state);
        tbody.append(`td`).text(item.country);
        tbody.append(`td`).text(item.shape);
        tbody.append(`td`).text(item.durationMinutes);
        tbody.append(`td`).text(item.comments);


    });

};


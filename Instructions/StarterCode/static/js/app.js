// from data.js (to descriptive variable for later)
var tableData = data;

// YOUR CODE HERE!

//reference table body in html file
var tbody = d3.select("tbody");

//Console.log the data from data.js
console.log(data);

//Loop Through `data` and console.log each object
data.forEach(function(dataTable) {
    console.log(dataTable);

//Use d3 to append one table row `tr` for each     
var row = tbody.append("tr");

//Use `Object.entries` to console.log each
    Object.entries(dataTable).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

//select the button
var button = d3.select("#filter-btn")
//select the form
var form = d3.select(".form-control")

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
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(inputValue);
    console.log(filteredData);
};

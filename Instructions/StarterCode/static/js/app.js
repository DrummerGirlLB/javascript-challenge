// from data.js
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



// Input fields can trigger a change event when new text is entered. NOTE: I copied this cause I know Ill need it.
//inputField.on("change", function() {
//    var newText = d3.event.target.value;
//    console.log(newText);
//  });  
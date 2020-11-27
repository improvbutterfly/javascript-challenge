// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

printTable(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Print the table with the data for each sighting
function printTable(sightings) {
	sightings.forEach((sighting) => {
	  var row = tbody.append("tr");
	  Object.entries(sighting).forEach(([key, value]) => {
	    var cell = row.append("td");
	    cell.text(value);
	  });
	});
};

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData;

  if (inputValue){
  	filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  }
  else{
  	// If datetime value is empty, return the full table
  	filteredData = tableData;
  };

  console.log(filteredData);

  // Empty table
  tbody.html("");

  // Print filtered table
  printTable(filteredData);

};
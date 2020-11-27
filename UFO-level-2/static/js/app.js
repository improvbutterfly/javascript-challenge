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
  
  // Select the datetime input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = inputElement.property("value");

  // Select the city input element and get the raw HTML node
  inputElement = d3.select("#city");

  // Get the value property of the input element
  var inputCity = inputElement.property("value");

  // Select the city input element and get the raw HTML node
  inputElement = d3.select("#state");

  // Get the value property of the input element
  var inputState = inputElement.property("value");

  // Select the city input element and get the raw HTML node
  inputElement = d3.select("#country");

  // Get the value property of the input element
  var inputCountry = inputElement.property("value");

  // Select the city input element and get the raw HTML node
  inputElement = d3.select("#shape");

  // Get the value property of the input element
  var inputShape = inputElement.property("value");

  console.log(inputDate);
  console.log(inputCity);
  console.log(inputState);
  console.log(inputCountry);
  console.log(inputShape);
  console.log(tableData);

  // Set filteredData to tableData to filter on multiple elements if they exist
  var filteredData = tableData;

  if (inputDate){
  	filteredData = filteredData.filter(sighting => sighting.datetime === inputDate);
  };
  if (inputCity){
  	filteredData = filteredData.filter(sighting => sighting.city === inputCity);
  };
  if (inputState){
  	filteredData = filteredData.filter(sighting => sighting.state === inputState);
  };
  if (inputCountry){
  	filteredData = filteredData.filter(sighting => sighting.country === inputCountry);
  };
  if (inputShape){
  	filteredData = filteredData.filter(sighting => sighting.shape === inputShape);
  };

  console.log(filteredData);

  // Empty table
  tbody.html("");

  // Print filtered table
  printTable(filteredData);

};
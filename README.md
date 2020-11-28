# javascript-challenge
Displaying auto table and date search with JavaScript

In this exercise, I was provided with data on UFO sightings in a JavaScript file, which I then had to display in a table on an HTML page. For [Part 1](/UFO-level-1) of the challenge, the data needed to be able to be filtered by date using JavaScript and D3.js, listening for event changes for a form. I didn't change any of the CSS provided for the challenge, but I did have to change some of the HTML, particularly for [Part 2](/UFO-level-2) of the challenge, which allowed users to filter on more than just the date. 

I was successfully able to filter on date, city, state, country, and shape. One of the modifications I had to make to the provided HTML form for the event listener to work properly on form submission was to change the button input type to submit input type, because hitting enter on my keyboard would not result in the form thinking it was being submitted. For this part of the exercise, I also converted the user inputs to lower cases, since all of the data was in lower case, to make it easier to compare and filter.

Another feature I added, which I don't think was technically asked for, was---in both parts 1 and 2 of the challenge---if the form had been used to filter the data, but the user wished to view all the data again, unfiltered, all they had to do was empty the form and re-submit.

If I was to work on this further, I would be interested in getting info from the data.js file to populate a dropdown box for the form for unique values of state, country, and shape.
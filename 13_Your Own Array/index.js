// Qno 13 : "Your Own Array" __ Think of your favourite mode of transportation, such as motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as 
//       "I would like to own a Honda Motorcycle"
var transportationMode = ["Lamborighni", "BMW", "Ferrarri", "Audi", "Land Cruiser", "Buggati"];
transportationMode.map(function (items) { return console.log("I would like to own a ".concat(items, " ")); });

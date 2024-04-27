// Qno 18_ : "Seeing the world"__ Think of at least five places in the world you'd like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
var favouritePlaces = ["Pakistan", "Saudi Arabia", "Turki", "China", "America", "London", "Italy", "Paris"];
//Print your array in it's original order.
console.log("Original Order : ", favouritePlaces);
//Print your array in alphabetical order without modifying the actual list.
var alphabeticalOrder = favouritePlaces.slice().sort();
console.log("Alphabetical Order : ", alphabeticalOrder);
// Show  that your array is still in its original order by printing it again.
console.log("Origial Order after sorting : ", favouritePlaces);
//Print your  array in reverse alphabetical order without changing the order of the original list.
var alphabeticalOrder = favouritePlaces.slice().sort().reverse();
console.log("Reverse the Alphabetical Order : ", alphabeticalOrder);
//Show that your array is still in its original order by printing it again.
console.log("Original Order after Reverse sorting : ", favouritePlaces);
// Reverse the order of your list.Print the array to show that its order has changed.
var reverseOrder = favouritePlaces.reverse();
console.log("Reverse the Original Order list : ", reverseOrder);
// Reverse the order of your list again. Print the list to show that it's order has been changed.
var reverseReverse = reverseOrder.reverse();
console.log("Reverse again to get Original order : ", reverseReverse);
//Sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
var alphabeticalOrder = favouritePlaces.slice().sort();
console.log("Sort into Alphabetical Order : ", alphabeticalOrder);
// Sort to change your array so it's stored in reverse alphabetical order.Print the list to show that its order  has changed..
var alphabeticalOrder = favouritePlaces.slice().sort().reverse();
console.log("Reverse sorted Alphabetical order : ", alphabeticalOrder);

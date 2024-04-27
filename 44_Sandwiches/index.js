// Qno 44 : "Sandwiches"__ Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following  items :\n");
    items.forEach(function (element) { return console.log(element); });
    console.log("\nEnjoy Sandwich :-)");
}
sandwiches("Chicken", "Cheese", "Egg", "Mayo");
console.log("\n********************************************\n");
sandwiches("Beef", "Butter");
console.log("\n********************************************\n");
sandwiches("Bread", "Chicken", "Tomatto", "Cheese", "Egg", "Mayo");
console.log("\n********************************************\n");

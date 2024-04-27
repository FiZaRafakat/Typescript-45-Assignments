// Qno 44 : "Sandwiches"__ Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.



function sandwiches(...items: string[]){

    console.log("\nMaking a sandwich with the following  items :\n");

    items.forEach(element => console.log(element))

     console.log("\nEnjoy Sandwich :-)");
        
}

sandwiches("Chicken","Cheese","Egg","Mayo")
console.log("\n********************************************\n");

sandwiches("Beef","Butter")
console.log("\n********************************************\n");

sandwiches("Bread","Chicken","Tomatto","Cheese","Egg","Mayo")
console.log("\n********************************************\n");
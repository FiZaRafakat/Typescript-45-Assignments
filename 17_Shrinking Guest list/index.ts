// Qno 17 : "Shrinking Guest list" __ You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two people for dinner.
// Start with your program from Exercise 16 ,Add a new line that prints a message saying that you can invite only two person for dinner.
// Remove guests from your list one at a time until only two names remain in your list.Each time you pop a name from your list, print a message to that person letting them know you're sorry you can't invite them to dinner.
// Print a message to each of the two person still on your list, letting them know they're still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at end of your program.

let guest = ['Nazia',"Maheen","Anaya","Anabya","Bareera"]
//print a message
console.log("\n\nUnfortunately ! The dinner table won't arrive so we can invite only two guests...");
console.log("---------------------------------------------------------------");

//Remove guest
while(guest.length >2){
    let removeGuest = guest.pop()
    console.log(`Sorry! ${removeGuest}, We can't invite you.`);
    }
    console.log("---------------------------------------------------------------");
// Remaining guests ko message print krwana

guest.map((items)=>console.log(`Dear ${items}, You are still invited for the dinner.`))
console.log("---------------------------------------------------------------");

// Remove last two guests
guest.pop()
guest.pop()

//print Empty list

console.log(guest);
console.log("---------------------------------------------------------------");


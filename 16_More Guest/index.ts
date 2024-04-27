// Qno 16 : "More Guest"__ You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15, add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. Use append[] to add new guest to the end of your list 
// Print a new set of invitation messages, one for each person in your list.


    let guest = ["Nazia","Ansa","Maheen","Maria","Mahnoor"]
// Print a message for a bigger dinner table,
     guest.map((items)=>console.log(`Hey , ${items} We arranged a dinner table.`));
     console.log("---------------------------------------------------------------");
     
//Add one new guest in the beginning     
     guest.unshift("Shaista")

//Add one new guest in the middle
    
    guest.splice(Math.floor(guest.length/2),0,"Alisha")
    
// Add new guest at the end
   guest.push("Fiza")
   

   guest.map((items)=>console.log(`Great new! ${items} We found a bigger table, So You all are invited.`));
     console.log("---------------------------------------------------------------");
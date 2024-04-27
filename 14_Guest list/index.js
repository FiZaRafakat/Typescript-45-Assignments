// Qno 14 : "Guest list" __ If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that include at least three people you'd like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
var guest = ["Ansa", "Maria", "Mahnoor"];
guest.map(function (items) { return console.log("Hey , ".concat(items, " You are invited to dinner")); });

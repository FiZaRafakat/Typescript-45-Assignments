// Qno 15 : "Changing Guest List"__ You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite.
//Start with your program from Exercise 14, Add a print statement at the end of your program stating the name of the guest who can't make it.
// Modify your list, replacing the name of the guest who can't make it with the name of  the new person you are inviting.
// Print a second set of  invitaion, one for each person who are still in your list.
var guest = ["Ansa", "Maria", "Mahnoor"];
//for removing a guest who can't come.
var newGuest = guest.splice(0, 1)[0];
//for adding a new element.
guest.push("Nazia");
// print a message who can't come
console.log("".concat(newGuest, " not invited for dinner"));
//  print a message for a  guest who can come
guest.map(function (items) { return console.log("Hey , ".concat(items, " You are invited to dinner")); });

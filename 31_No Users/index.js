//Qno 31 :"No Users"__ Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["Fiza", "Nazia", "Haseena", "Nazish", "Maheen"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty, We need to find some users.");
}
else {
    userNames.forEach(function (oneUsers) {
        if (oneUsers === "Fiza") {
            console.log("Hello ".concat(oneUsers, ", would you like to see a status report."));
        }
        else {
            console.log("Hello ".concat(oneUsers, " , thank you for logging again."));
        }
    });
}

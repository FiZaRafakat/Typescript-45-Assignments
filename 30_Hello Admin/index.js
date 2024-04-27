// Qno 30 :"Hello Admin"__ Make a  array of five or more usernames, including  the name 'admin' .
// Imagine you are writing code  that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user.
// If the username is 'admin', Print a special greeting, such as Hello Admin, would you like to see a status report?
// otherwise, Print  a generic greeting, such as Hello Eric,Thank You for logging in again.
// It's assume Fiza is admin
var usernames = ['Fiza', "Nazia", "Shiza", "Neha", "Anaya", "Anabya", "Maheen"];
usernames.forEach(function (user) {
    if (user === "Fiza") {
        console.log("Hello ".concat(user, ", would you like to see a status report."));
    }
    else {
        console.log("Hello ".concat(user, ",Thank you for logging in again."));
    }
});

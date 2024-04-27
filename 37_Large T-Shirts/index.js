//Qno 37 :  "Large Shirts"__Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("You selected ".concat(size, " size shirt and the message ").concat(message, " prints on shirt..."));
}
/// By default
make_shirt();
//// Calling a function with medium size and default message
make_shirt('Medium');
//// Calling a function with small size and new message
make_shirt("Small", "I  love Python");

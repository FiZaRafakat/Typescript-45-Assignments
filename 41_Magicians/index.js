// Qno 41 : "Magicians"__ Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
var magicians_name = ["Hassan", "Ali", "Usman"];
show_magicians(magicians_name);

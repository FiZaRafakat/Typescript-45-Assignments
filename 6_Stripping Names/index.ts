// Qno 6 : "stripping Names" __Store a person's name, and include some whitespace character at the beginning and end of the name.
// Make sure  you use each character combination, "\t" and "\n" , at least once .
// Print the name once , so the whitespaces around the name is displayed. Then print the name after stripping the whitespaces..


let friendName : string = "\n\t\t\t   Fiza Rafakat   \t\n"
console.log(`Name with whitespaces : ${friendName}`)
console.log("Name without whitespaces : " + friendName.trim())

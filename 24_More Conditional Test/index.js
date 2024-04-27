"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let typescript = "typescript";
let TYPESCRIPT = "TYPESCRIPT";
let Five = 5;
let Seven = 7;
let myFriend = ["Nazia", "Maheen", "Shiza", "Mahnoor", "Maria"];
//Tests for equality and inequality with strings
console.log("Is typescript equal to typescript?");
console.log(typescript == "typescript");
console.log("Is tyescript equal to javascript?");
console.log(typescript != "typescript");
//Tests using the lower case function
console.log("Is TYPESCRIPT  equal to typescript?");
console.log(TYPESCRIPT.toLowerCase() == "typescript");
console.log("Is TYPESCRIPT  not  equal to typescript?");
console.log(TYPESCRIPT.toLowerCase() != "typescript");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is Five  Equal to Seven ?");
console.log(Five == Seven);
console.log("Is Five not Equal to seven ?");
console.log(Five != Seven);
console.log("Is five Greater than seven ?");
console.log(Five > Seven);
console.log("Is five less than seven ?");
console.log(Five < Seven);
console.log("Is five Greater than or equal to seven ?");
console.log(Five >= Seven);
console.log("Is five less than or equal to seven ?");
console.log(Five <= Seven);
//Tests using "and" and "or" operators
console.log("Is five Equal to seven and five less than seven.");
console.log(Five == Seven && Five < Seven);
console.log("Is five Equal to seven Or five less than seven.");
console.log(Five == Seven || Five < Seven);
//Test whether an item is in a array
console.log("Is Nazia is my Friend ?");
console.log(myFriend.includes("Nazia"));
//Test whether an item is not in a array
console.log("Is Nazia not my Friend ?");
console.log(!myFriend.includes("Nazia"));

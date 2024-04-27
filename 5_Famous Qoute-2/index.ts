// Qno 5 : "Famous Quote 2" __ Repeat exercise 4, but this time store the famous person's name in a variable called famous_person.Then compose your message and store in a new variable called message. Print your message.


let quote : string = "Expect the best, Prepare for the worst..."
let famous_person : string = "Muhammad Ali Jinnah"
let message : string = `${famous_person} once said, "${quote}"`
console.log(message)
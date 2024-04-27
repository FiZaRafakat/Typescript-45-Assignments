// Qno 28 :"Stages Of Life"__ Write an if-else chain that determines a person's stage life. Set a value for the variable age, and then:
// If the person is less than 2 years old , pirnt the message that the person is baby.
// If the person is at least 2 years old but less than 4, Print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13 , Print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, Print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65 , Print a message that the person is an adult.
// if the person is age 65 or older, Print a message that the person is elder.....

let age = 20 ;

if (age < 2 ){
    console.log("You are a Baby.");
    
} else if (age >=2 && age < 4 ){
    console.log("You are a Toddler.");
    
}else if (age >= 4 && age < 13){
    console.log("You are a Kid.");
    
}else if (age >= 13 && age < 20){
    console.log("You are a Teenager.");
    
} else if (age >= 20 &&  age < 65){
    console.log("You are an Adult.");
    
} else if (age >= 65){
    console.log("You are Elders.");
    
}
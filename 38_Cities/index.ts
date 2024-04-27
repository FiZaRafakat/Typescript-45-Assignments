// Qno 38 : 'Cities'__ Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.



function describe_city(city : string = "Islamabad" , country : string = "Pakistan"){
 
     console.log(`${city} is the capital of ${country}.`);
     
}
/// default
describe_city()
// new values
describe_city("New Delhi" , "India")
describe_city("Ankara" ,"Turkey")
describe_city("Paris","France")
describe_city("Ottawa" , "Canada")
describe_city("Washington,D.C" ,"United states")
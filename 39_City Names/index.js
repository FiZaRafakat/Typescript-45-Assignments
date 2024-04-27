// Qno 39 : "City Names" __ Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    return "\"".concat(city, ", ").concat(country, "\"");
}
console.log(city_country());
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));
console.log(city_country("Itlay", "Rome"));
console.log(city_country("Moscow", "Russia"));

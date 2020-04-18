  
var vacaType = prompt("What kind of vacation are you thinking about planning; musical, tropical, or adventurous?");
var groupSize = prompt("How many people will be joining you on your trip?");

var result = "Since you'd like a " + vacaType + " vacation of " + groupSize + ", I recommend ";

if (vacaType === "musical") {
    result = result + "a trip to New Orleans. ";
}

if (vacaType === "tropical") {
    result = result + "a trip to Mexico's beaches. ";
}

if (vacaType === "adventurous") {
    result = result + "whitewater rafting in the Grand Canyon. ";
}

if (groupSize <= 3) {
    result = result + "First class travel on an airline of your choosing!";
}
else if (parseInt(groupSize) >= 3 && parseInt(groupSize) <= 5) {
    result = result + "Surprisingly, you can all fit on a helicopter. Have fun!";
}
else {
    result = result + "How about a charter flight to your destination? Enjoy yourself!";
}
console.log(result);
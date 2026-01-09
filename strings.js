// string in javascript

let str1 = "Hello coder army";
let str2 = "I am fine";
let str3 = `My name is Dhruv`;
// console.log(str1, str2, str3);

let price = 50;

// console.log(`price of the toy is ${price} rupees`);

//string concactenation

let s1 = "Hello ";
let s2 = "coder army";
let s3 = s1 + s2;
// console.log(s3.length);

// "hello coder army"
// console.log('"hello coder army"');

//'hello coder army'
// console.log("'hello coder army'");

// \n => new line
let message = "Rohit is a good boy.\nhe is intelligent too.";
// console.log(message);

//escape character
let comment = "Rohit is a good boy.\\nhe is intelligent too.";
// console.log(comment);

//print first or nth character of string
let special = "rohit";
// console.log(special[0]);
// console.log(special.charAt(2));

//to lowercase-> returns string in lowercase
//to uppercase-> returns string in uppercase.
//returns a new string
let lower = "ROHIT";
// console.log(lower.toLowerCase());
// console.log(lower.toUpperCase());
// console.log(lower);

let hero = "Hello Coder Army Coder";
// console.log(hero.indexOf("Coder")); //6
// console.log(hero.indexOf("z")); //-1
// console.log(hero.lastIndexOf("Coder"));
// console.log(hero.includes("Coder"));

//slice(starting index, ending index(not included))
//splice(starting index, number of characters to be removed)
let newstring = "HeloDon";
//0-1-2-3-4-5-6
//-7-6-5-4-3-2-1
// console.log(newstring.slice(0, 3)); //Hel
//slice can also take negative index
//substring here can't take negative index
// console.log(newstring.substring(0, 3)); //Hel
// console.log(newstring.slice(-6, 5));
// console.log(newstring.slice(-2, 4));

//replace(oldsubstring, newsubstring)
//replaceAll(oldsubstring, newsubstring)
//keep in mind case sensitivity works here
let str10 = "Hello ji kaise ho ji";
// console.log(str10.replace("how", "who"));
// console.log(str10.replaceAll("ji", "Money"));

//`split()` delimiter is the exact character or pattern that decides where a string is broken into an array.
//Syntax:** `string.split(delimiter)`

let str11 = "Hello! coder! army! welcome! to! coder! army";
// console.log(str11.split("! "));

//trim() removes whitespace from both ends of a string and returns a new string, without modifying the original string.
let str12 = " hello ji";
// console.log(str12.trim());
// console.log(str12.trim().length);

//New way to create string using String() constructor
let lateststring = new String("Hello coder army");
// console.log(lateststring);
// console.log(typeof lateststring);

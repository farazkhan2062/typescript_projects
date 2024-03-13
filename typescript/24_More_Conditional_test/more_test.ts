//Tests for equality and inequality with strings (All True)
console.log("Test for equality: " , 'Apple' === 'Apple');
console.log("Test for inequality: " , ('Apple') as string != 'Orange');

//Tests using the lower case function
console.log("Test for Lower Case: " , 'faraz'.toLowerCase() === 'faraz');
console.log("Test for Upper Case: " , 'FARAZ'.toUpperCase() === 'FARAZ');

//Numerical tests involving equality and inequality
console.log("Numerical test Equality :" , 30 === 30);
console.log("Numerical test Inequality :" , (30) as number != 35);
//greater than and less than
console.log("Numerical test Greater than: " , 15 > 10);
console.log("Numerical test less than: " , 10 < 15);
//greater than or equal to and less than or equal to
console.log("Numerical test Greater than or equal to: " , 15 >= 15);
console.log("Numerical test less than or equal to: " , 10 <= 15);

//Tests using "and" and "or" operators
console.log("Test using and: " , 25 === 25 && 30 >= 30);
console.log("Test using or: " , 25 === 25 || 20 < 25);

//Test whether an item is in a array
const fruites : string [] = ["Mango" , "Banana" , "Orange"];
console.log('Test "Mango" in the Array: ', fruites.includes("Mango"));
console.log('Test "Apple" in the Array: ', !fruites.includes("Apple"));

//Tests for equality and inequality with strings (True and False)
console.log("Test for equality: " , 'Apple' === 'Apple');
console.log("Test for inequality: " , 'Apple'!= 'Apple');

//Tests using the lower case function (True and False)
console.log("Test for Lower Case: " , 'faraz'.toLowerCase() === 'faraz');
console.log("Test for Upper Case: " , 'FARAZ'.toUpperCase() === 'faraz');

//Numerical tests involving equality and inequality (True and False)
console.log("\n\n\nNumerical test Equality :" , 30 === 30);
console.log("Numerical test Inequality :" ,30 != 30);
//greater than and less than (True and False)
console.log("Numerical test Greater than: " , 15 > 10);
console.log("Numerical test less than: " , 15 < 10);
//greater than or equal to and less than or equal to (True and Fales)
console.log("Numerical test Greater than or equal to: " , 15 >= 15);
console.log("Numerical test less than or equal to: " , 10 <= 5);

//Tests using "and" and "or" operators
console.log("Test using and: " , 25 === 25 && 30 >= 30);
console.log("Test using or: " , false || 20 != 20);

//Test whether an item is in a array
const fruite : string [] = ["Mango" , "Banana" , "Orange"];
console.log('Test "Mango" in the Array: ', fruite.includes("Mango"));
console.log('Test "Apple" in the Array: ', fruite.includes("Apple"));








//Set a value for the variable age
let num1 : number = 90 ;

// • If the person is less than 2 years old
if(num1 < 2){
    console.log("Person is a Baby");
}

//If the person is at least 2 years old but less than 4
else if(num1 <= 2 || num1 < 4){
    console.log("Person is a toddler");
}

//If the person is at least 4 years old but less than 13
else if(num1 <=4 || num1 < 13){
    console.log("Person is a Kid");
}

// • If the person is at least 13 years old but less than 20
else if(num1 <= 13 || num1 < 20){
    console.log("Person is a teenager");
}

// • If the person is at least 20 years old but less than 65
else if (num1 <= 20 || num1 < 65){
    console.log("Person is an adult");
}

// • If the person is age 65 or older, 
else {
    console.log("Person is an elder");
}

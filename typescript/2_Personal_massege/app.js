"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
if (personName !== '' && personName !== null) {
    alert(`Hello ${personName}, would you like to learn some python today?`);
}
else {
    alert('you have to fill your name!');
}

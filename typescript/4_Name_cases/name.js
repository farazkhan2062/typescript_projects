var namePerson = '';
namePerson = prompt('what is your name?') || '';
var lowercase = namePerson.toLowerCase();
var uppercase = namePerson.toUpperCase();
var titlecase = namePerson.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.
    slice(1).toLowerCase(); }).join(' ');
if (namePerson !== null && namePerson !== '') {
    alert("Hello ".concat(namePerson, ", Here is your name in:\n    LowerCase: ").concat(lowercase, "\n    UpperCase: ").concat(uppercase, "\n    TitleCase: ").concat(titlecase));
}
else {
    alert('please fill your name');
}

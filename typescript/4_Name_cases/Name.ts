let namePerson : string = '';

namePerson = prompt('what is your name?') || '';

let lowercase : string = namePerson.toLowerCase();
let uppercase : string = namePerson.toUpperCase();

let titlecase : string = namePerson.split(' ') .map(word => word.charAt(0).toUpperCase()+word.
slice (1).toLowerCase()).join(' ')

if (namePerson !== null && namePerson !==''){
    alert(`Hello ${namePerson}, Here is your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`)
}
else{
    alert('please fill your name')
}
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

let magician : string[] = ['Harry potter' , 'Harmione Granger' , 'Ron Weasley' , 'Albus Dumbledore'];

function show_magicians(Magicians : string[]){
    Magicians.forEach(element => {
      console.log(element);  
    });
}
show_magicians(magician);
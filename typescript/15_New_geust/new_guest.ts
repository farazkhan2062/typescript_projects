import { clearScreenDown } from "readline";


let guest_list : string[] = ['Imran Khan,' , 'Nawaz Sharif,' , 'Asif Ali Zardari,'];

for(let i=0; i<guest_list.length; i++){

console.log('To. Dear Mr, ' + guest_list[i] + '\n\nI would like to invite you for the dinner at Sunday\n\n'
 + 'Thank you!\n\n');


}

let absnet_guest = 'Imran Khan';
let new_guest = 'Sir Kamran Tessori';

guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++){

    console.log('To. Dear Mr, ' + guest_list[i] + '\n\nI would like to invite you for the dinner at Sunday\n\n'
     + 'Thank you!\n\n');
    
    
    }
console.log(`Mr.  ${absnet_guest} is not coming to the dinner`);
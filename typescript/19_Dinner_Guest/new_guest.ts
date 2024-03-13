import { clearScreenDown } from "readline";
let guest_list : string[] = ['Imran Khan,' , 'Nawaz Sharif,' , 'Asif Ali Zardari,'];

// for(let i=0; i<guest_list.length; i++){

// console.log('To. Dear Mr, ' + guest_list[i] + '\n\nI would like to invite you for the dinner at Sunday\n\n'
//  + 'Thank you!\n\n');

// }

// let absnet_guest = 'Imran Khan';
// let new_guest = 'Sir Kamran Tessori';
// guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++)
// {
//     console.log('To. Dear Mr, ' + guest_list[i] + '\n\nI would like to invite you for the dinner at Sunday\n\n'
//      + 'Thank you!\n\n');
//           }

// console.log(`\n\nMr.  ${absnet_guest} is not coming to the dinner`);
// console.log('\n\nGood new! we have arrange big table so we are inviting three more guests');

// guest_list.unshift('Sir Zia Khan');
// guest_list.splice(2, 0 ,'Maryam Nawaz');
// guest_list.push('Bilawal Bhutto Zardari');

// for(let i=0; i<guest_list.length; i++)
// {
//     console.log('To. Dear Mr, ' + guest_list[i] + '\n\nI would like to invite you for the dinner at Sunday\n\n'
//      + 'Thank you!\n\n');
      
//     }

// console.log('\n We are sorry we cannot arrange big table, so we are inviting only two persons');

while(guest_list.length > 2)
{let remove_guest = guest_list.pop();
// console.log(`Sorry Mr. ${remove_guest}, you are not invited for the dinner`);
}

// for(let i=0; i<guest_list.length; i++)
// {
//     console.log('To. Dear Mr, ' + guest_list[i] + '\n\nYou are still invited\n\n'
//      + 'Thank you!\n\n')};

    guest_list.splice(0,2);
    console.log(guest_list);


    console.log(`Total number of guest are ${guest_list.length}`);

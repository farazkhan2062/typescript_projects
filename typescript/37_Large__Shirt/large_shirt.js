"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
// any size with a different message.
function make_shirt(size = 'Large', text = 'I Love TypeScript.') {
    console.log(`Creating a ${size} size shirt with ${text}`);
}
make_shirt();
make_shirt('Small', 'Cool World');
make_shirt('Medium');
make_shirt('Large', 'beautiful World');
make_shirt('Xtra Large', 'Smart World');
make_shirt('XXLarge', 'For Healthy World');

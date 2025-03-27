import { active, userList } from './db.js';

//primitív types
const isActivated = true; // boolean
const userName = "jeremy";  // string
const usercount = 15;   // number
const nothing = null;   // object
let base; //undefined type

console.log(typeof isActivated);
console.log(typeof userName);
console.log(typeof usercount);
console.log(typeof nothing);
console.log(typeof base);

// prototype
Number.prototype.mod = function(divider){
    return this % divider;
};
console.log( usercount.mod(3) );
console.log( userList[0].age.mod(2) );


console.log( userList[0].name, active );

//Collections
const numbers = [3, 5, 7, [true, "Marika"], 99, 0];
console.log( numbers[3][1] );
console.log( numbers.length );

//objects

console.log( userList[2].age );

const key = 'name';
console.log( userList[2][key] );
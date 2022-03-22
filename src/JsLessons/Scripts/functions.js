/*JavaScript  functions are  FIRST CLASS CITIZENS
    -It means JavaScript functions are values in themselves
    -They can be stored in variables and passed into other functions , just like any 
    other place of data in javascript
 */

//  const doc = doctorize('Balaji');
//  console.log(doc);
// function doctorize (firstName) {
//     return  `Dr. ${firstName}`;
// }

//anon function
// function(firstName) {
//     return `Dr. ${firstName};`;
// }

//function expression

// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// }

/* 
    These are **not hoisted**, meaning js doesn't put them at the top of the file,
    so if a function is not defined with the function keyword,
    then there's n error and the functions fails to execute.
*/
//hoisting doesn't work for anon function ,it only
// works on defined function


// --- ARROW FUNCTIONS -----
const inchToCM = inches => {
    console.log(inches);
    return inches * 2.54 
};

const resultcm = inchToCM(10);
console.log(resultcm);

    const funcA = () => {
        console.log('Hi');
    };
    funcA();

const add = (a,b=3) => a+b;
const inToCM = inches => inches * 2.54;

console.log(add(100));
console.log(inToCM(25));

// ------ Arrow functions ---------
    //return an Object
const makeAPerson = (first,last) => ({ name:`'${first} ${last}`,age: 21});
const person = makeAPerson('Balaji', 'Vijayakumar');
console.log(person);

//self-calling function
// **IIFE : Immediately Invoked Function Expression
(function(age) {
    console.log(`You are cool and your age is ${age}`);
})(21);

//paranthesis run first in js, so we have wrapped the function in {}.
// The function immediately runs.
//The argument passed here is 21 for parameter age.

/*---METHODS---
    - A function which lives inside an object.
    - for e.g 'console.log('hey')'; here 'log' is the method and 'console' is the object.
    - **2 ways to define methods:**
*/
const employee = {
    name: 'Balaji Vijayakumar',
    //method
    sayHi: function() {
        console.log(`Hi!!!! ${this.name}`);
        return `Hi ${this.name}`;
    },
    print: () => {
        console.log('Hello employee');
    },
    yellHi() {
        console.log(`HI ${this.name.toUpperCase ()}`);
    }
};
employee.sayHi();
employee.print();
employee.yellHi();

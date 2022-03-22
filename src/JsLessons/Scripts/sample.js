const maxvalue = Math.max(10,12,35,89,45,97);
console.log(maxvalue);
const minvalue = Math.min(10,12);
console.log(minvalue);

const floatValue = parseFloat('2.032565');
console.log(floatValue);

let intValue = parseInt('2356abcd');
console.log(intValue);

intValue = parseInt('abcd2356');
console.log(intValue);

let today = Date.now();
console.log(today);


//functions - arguments and parametres
/* - paramteres are like placeholders for data that will be passed to a function
    -Arguments are the actual values passed to a function while calling it.
*/
function calculateBill (billAmount, taxRate) {
    console.log(billAmount + ' - ' + taxRate);
    const total= billAmount + billAmount*taxRate
    return total;
}
calculateBill(100,0.13); //here 100,013 are arguments

/* - paramters are variable local to the function; avilable only inside the function
    - you can also pass variables as arguments during a function call
    - we can also pass expresseions as arguments to a function
*/

let billtotal = calculateBill(20+10+50,0.75);
console.log(billtotal);

function yell (name = ' Silly Goose') {
    return `HEY ${name.toUpperCase()}`
}
let greetings = yell('Balaji');
console.log(greetings);
greetings = yell();
console.log(greetings);

//above, if we don't pass any argument to yell function, then it 
//takes the default value in function definition,
//here silly goose 

function calculateBill (billAmount,taxRate=0.13,tipRate = 0.15) {
    console.log('Running Calculate Bill !!!!');
    console.log('bilAmount: ' + billAmount + 'taxRate: '+ taxRate + ' tipRate: '+ tipRate);
    const total = billAmount + billAmount*taxRate + billAmount + tipRate;
    return total;
}

calculateBill(100);
calculateBill(100,0.66);
//suppose above, we want to pass the tiprate but not the taxrate and want taxrate to be default,
//then the only thing we can do is:

calculateBill(100,undefined,0.66); 

//here the taxRate will defalut to 0.13 as
//we have passes undefined to it and the tiprate will be 0.66 as passed.
// const names = ['John', 'Sam', 'Peter'];

// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length-1]);

// names.push('Suresh');
// console.log('After push: ' + names);

// //Push will add the item at the end 

// // ... is called as the spread Operator
// // it represents the entire items in the array

// const names2 = [...names,'Raj'];
// console.log('names2: ' + names2);

// names.unshift('poppy');
// console.log('unshift:' + names);

// //unshift adds data to the beginning.
// //so the index no of the result of the values will change now
// const names3 = ['raj', ...names];
// console.log(names3);

// //this will add the data at the  beginning
// //now next method slice()
// //create a new array

// const bikes = ['bianchi', 'miele', 'panasonic', 'miyata','RE'];
// const b1 =[...bikes.slice(0,2)];
// console.log(b1);

// //slice takes 2 parameters
// //from, to
// // It has copied 2 values from index 0 and assigned to b1

// const b2 = [...bikes.slice(3)];
// console.log(b2); //from 3rd index

// const newBikes = [
//     ...bikes.slice(0,2),
//     'benotto' ,
//     ...bikes.slice(2)
// ];
// console.log('newBikes: ' + newBikes);
// // New array called newBikes is created.
// //Then in index 0 and 1 values fro bikes is copied using the slice (0,2) method.The first 2 values are copied,
// //In the 2nd index value 'benotto' is pushed,
// //then from the third index again values from bikes is copied using slice(2) - the last 2 index of bikes are copied.
// const newBikes2 = [
//     ...bikes.slice(0,2),
//     ...bikes.slice(4)
// ];
// console.log('newBikes2: ' + newBikes2);

// const indexOfSam = names.findIndex(names => names === 'Sam');
// console.log('IndexOfSAM: '+ indexOfSam);

// //write a function to delete a name form array
// console.log(names);
// function deleteName (name,names) {
//     const findIndex = names.findIndex(names => names === name);
//     // MY CODE FOR THIS FUNCTION
//     // const op = names.slice(0,
//     //     ...names.slice(1,names.length),);
//     // console.log("op",op);
//     // console.log(names[findIndex]);
//     // console.log(findIndex);   

//     console.log('indexOf Name to delete:' + findIndex);
//     const newArray = {
//         ...names.slice(0,findIndex),
//         ...names.slice(findIndex+1)
//     };
//     return newArray;
// }
// const dlNames = deleteName('John',names);//here dlnames is a new array
// console.log("After delete",dlNames);
// console.log('Before Delete',names);

// const numbers = [1,2,3,4,5,6,7,8,9];

// console.log(numbers);
// numbers.splice(3,2); // form the 3rd index delete the next 2 values
// // the value in numbers are modified/ deleted
// console.log(numbers);

// const pizzaSlice = numbers.slice(2,4); //start and end index
// // (method) Array<number>.slice(start?: number, end?: number:)
// // Immutable method - does not change the source array
// console.log('pizzaSlices: ' + pizzaSlice);
// console.log('original Numbers: ' + numbers);
// // 
const numbers = [1,2,3,4,5,6,7,8,9];
numbers.reverse();
console.log(numbers);
//anytime you want to use a mutation method and NOT mutate the Original array.
//we need to take a copy of the array
const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);
const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

  const students = [
 {
  id: '11ce',
  first_name: 'Dall',
  last_name: 'Puckring',
 },
 {
  id: '2958',
  first_name: 'Margarete',
  last_name: 'Brandi',
 },
 {
  id: '565a',
  first_name: 'Bendicty',
  last_name: 'Woodage',
 },
 {
  id: '3a16',
  first_name: 'Micki',
  last_name: 'Mattes',
 },
 {
  id: 'f396',
  first_name: 'Flory',
  last_name: 'Gladeche',
 },
 {
  id: 'de5f',
  first_name: 'Jamill',
  last_name: 'Emilien',
 },
 {
  id: '54cb',
  first_name: 'Brett',
  last_name: 'Aizikowitz',
 },
 {
  id: '9135',
  first_name: 'Lorry',
  last_name: 'Smallman',
 },
 {
  id: '978f',
  first_name: 'Gilly',
  last_name: 'Flott',
 },
  ];

  const people = [
 {
  birthday: 'April 22, 1993',
  names: {
   first: 'Keith',
   last: 'Buckley'
  }
 },
 {
  birthday: 'January 3, 1975',
  names: {
   first: 'Larry',
   last: 'Heep'
  }
 },
 {
  birthday: 'February 12, 1944',
  names: {
   first: 'Linda',
   last: 'Bermeer'
  }
 }
  ];


  const buns = ['egg', 'wonder', 'brioche'];

  const meats = {
   beyond: 10,
   beef: 5,
   pork: 7
  };

  const prices = {
   hotDog: 453,
   burger: 765,
   sausage: 634,
   corn: 234,
  };

  const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

  const feedback = [
   { comment: 'Love the burgs', rating: 4 },
   { comment: 'Horrible Service', rating: 2 },
   { comment: 'Smoothies are great, liked the burger too', rating: 5 },
   { comment: 'Ambiance needs work', rating: 3 },
   { comment: 'I DONT LIKE BURGERS', rating: 1 },
  ];

  const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

  const inventory = [
   { type: 'shirt', price: 4000 },
   { type: 'pants', price: 4532 },
   { type: 'socks', price: 234 },
   { type: 'shirt', price: 2343 },
   { type: 'pants', price: 2343 },
   { type: 'socks', price: 542 },
 { type: 'pants', price: 123 },
  ];

function logItemsInArray(item, index, originalArray) {
    const nextitem = originalArray[index+1];
    const previtem = originalArray[index-1];
    //log the item
    console.log('CurrentItem: '+item);
    //log the prev item if there is one
    previtem ? console.log('previtem: '+previtem) : null;
    //log the next item if there is one
    nextitem? console.log('NextItem: '+nextitem) : null;
    //if its the last item in the array, say GoodBye
    index === originalArray.length - 1
        ?console.log('Goodbye')
        :console.log('Getting the next item');
//index === originalArray.length && console.log('GOODBYE');
console.log('-------🎉🎉🎉🎉🎉🎉-----');
}
console.log(toppings);
toppings.forEach(logItemsInArray);

function displayToppings(item)
{
    console.log('currentItem: ' + item);
}
toppings.forEach(displayToppings);

//Map
toppings.map(displayToppings);

function addArms(face) {
    return `😎 ${face} 👌`;
}
const toys = faces.map(addArms);
console.log(toys);

function increaseValue(item) {
    return item * 1.25;
}
const newTotalNumber = orderTotals.map(increaseValue);
console.log(newTotalNumber);

function tallyNumbers(prvNumber, currentNumber) {
    console.log(`The Total so far is ${prvNumber}`);
    console.log(`The Curent Number is ${currentNumber}`);
    console.log('- - - - - - - ');
    //return the current tally PLUS the amount of this order
    return prvNumber + currentNumber;
}
const allOrders = orderTotals.reduce(tallyNumbers,0);
console.log('allOrders: '+ allOrders);

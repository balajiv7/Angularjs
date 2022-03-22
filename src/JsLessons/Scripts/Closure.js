/* -----------CLOSURE ----------------
    The ability to access the outer level scoped
    data from the inner level scoped code even 
    afterthe function is terminated
*/
function doSomeTask () {
    const x = 100;
    const  y = 20;
    console.log('x: ' + x + ' y: '+ y);
}
doSomeTask();
console.log('Completed');

function outer() {
    const outervar ='Hey I am the outer var!';
    //console.log(outervar);
    function inner() {
        const innervar = 'Hey I am an inner var!';
        console.log(innervar);
        console.log(outervar); // closure - captured variable
    }
    //console.log(innervar); //uncaught reference error : innervar is not defined
    //inner(); //call to inner() from outer()
     return inner;
}
//outer();
const innerFunc = outer();
innerFunc();

function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function (name) {
        return `${myGreet} ${name}`;
    }
}
const anon = createGreeting('Hi');
console.log(anon('Balaji'));

const sayVanakkam =  createGreeting('Vanakkam');

console.log(sayVanakkam('Ajith'));
console.log(sayVanakkam('Vishy'));

function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Balaji ${gameName} score is ${score}`;
    }
  }
  const output = createGame('Chess');
  console.log(output());

  const hockeyGame = createGame("Hockey");
  const soccerGame = createGame("soccer");
  console.log(hockeyGame());
  console.log(hockeyGame());
//   hockeyGame();
//   hockeyGame();
 // soccerGame();
  console.log(soccerGame());
  console.log(soccerGame());


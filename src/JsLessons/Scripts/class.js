//-----------  CLASS  --------------------------------

class Pizza {
    // Constructor
    constructor(toppings = [], customer) {
        this.toppings = toppings;
        this.customer = customer;
    }
    //-------static variable----------------
    //static property
    static extraToppings = ['pepperoni', 'cheese'];
    //static method
    static sayThankyou() {
        console.log('ThankYou!!!!!')
    }
    
    //Instance property
    slices = 10;

    get noOfSlices () {
        return this.slices;
    }
    set noOfSlices(value)
    {
      this. slices = value;
    }
    eat() { 
        console.log(this.toppings);
        console.log(this.customer);
    }
    getCokeOrPepsi = () => {
        console.log('coke');
        console.log('pepsi');
        console.log(this);
    }
    // --- Private Fields can only be modfied inside a class
    #bankBalance = 10000;

    get balance () {
        return this.#bankBalance;
    }
    set balance(value) {
        this.#bankBalance = value;
    }
}
const myLunch = new Pizza(['Onion','Mushroom','Capcicum'], 'Balaji');
// console.log(myLunch);
myLunch.eat();
myLunch.toppings = ['Carrot', 'Almonds', 'Lobster'];
console.log(myLunch.toppings);
console.log(Pizza.extraToppings);
Pizza.extraToppings = ['Onions', 'Lettuce'];
console.log(Pizza.extraToppings);
myLunch.eat();
Pizza.sayThankyou();
console.log(myLunch.noOfSlices);
myLunch.noOfSlices = 12;
console.log(myLunch.noOfSlices);
myLunch.getCokeOrPepsi();
myLunch.slices =15;
console.log(myLunch.noOfSlices);

console.log(myLunch.balance);
myLunch.balance=5000;
console.log(myLunch.balance);

// myLunch.#bankBalance =2000;
// console.log(myLunch.balance);
// 1. Чи можливо створити функції A та B, щоб new A() == new B()?

// function A() { ... }
// function B() { ... }
// let a = new A;
// let b = new B;
// alert( a == b ); // true

let emptyObj  = {};
function A() { return emptyObj }
function B() { return emptyObj }
let a = new A;
let b = new B;
console.log('First exercise: ', a == b );

// 2. Створити Калькулятор за допомогою конструктора

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
    // Наприклад:
    // let calculator = new Calculator();
    // calculator.read();
    //
    // alert( "Sum=" + calculator.sum() );
    // alert( "Mul=" + calculator.mul() );

function Calculator () {
    this.read = function(){
        this.a = +prompt('Write a', 10);
        this.b = +prompt('Write b', 10)
    },
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// 3. Створіть функцію-конструктор Accumulator(startingValue).
    // Об’єкт, який він створює повинен:
    // Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
    // Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
    // Іншими словами, властивість value – це сума всіх введенних користувачем значень разом із початковим значенням startingValue.

    // let accumulator = new Accumulator(1); // початкове значення 1
    // accumulator.read(); // додає введене користувачем значення
    // accumulator.read(); // додає введене користувачем значення
    // alert(accumulator.value); // показує суму цих значень

Accumulator = function(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Write value', 14);
    }
}


let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
alert(accumulator.value);

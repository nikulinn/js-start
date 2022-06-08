// 1.Чи можливо створити функції A та B, щоб new A() == new B()?
// let obj = {};
//     function A() {
//         return obj;
//     }
//     function B() {
//         return obj;
//     }
//
// let a = new A;
// let b = new B;

// alert( a == b ); // true

// 2.Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// function Calculator() {
//
//     this.read = function() {
//         this.a = +prompt('write a', 15)
//         this.b = +prompt('write a', 15)
//     },
//     this.sum =function () {
//      return this.a + this.b
//     },
//     this.mul =function () {
//         return this.a * this.b
//     }
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// 3.Створіть функцію-конструктор Accumulator(startingValue).
//     Об’єкт, який він створює повинен:
//     Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
//     Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
//     Іншими словами, властивість value – це сума всіх введенних користувачем значень разом із початковим значенням startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        console.log('this.startingValue', this.startingValue)
        this.value0 = +prompt('write a number', '10');
        return this.value += this.value0
    }
}


let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

alert(accumulator.value);
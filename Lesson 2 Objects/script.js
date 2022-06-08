// 1.Чи можливо створити функції A та B, щоб new A() == new B()?
let obj = {};
    function A() {
        return obj;
    }
    function B() {
        return obj;
    }

let a = new A;
let b = new B;

// alert( a == b ); // true

// 1.Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function Calculator() {

    this.read = function() {
        this.a = +prompt('write a', 15)
        this.b = +prompt('write a', 15)
    },
    this.sum =function () {
     return this.a + this.b
    },
    this.mul =function () {
        return this.a * this.b
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
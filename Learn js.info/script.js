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
console.log( a == b );
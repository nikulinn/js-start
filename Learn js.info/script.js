// 1. Напишіть скрипт, який просить відвідувача ввести два числа, і в результаті показує їх суму.
function sum() {
    let first = +prompt('Put a first number');
    let second = +prompt('Put a second number');
    let sum = first + second;
    alert(sum);
}
// sum();

// 2. Повторюйте, поки вхід не буде числом
// Створіть функцію readNumber, яка запросить число, поки відвідувач не введе дійсне числове значення.
// Отримане значення потрібно повернути як число.
// Відвідувач також може зупинити процес, ввівши порожній рядок або натиснувши “CANCEL”. У цьому випадку функція повинна повернути null.
// 2.1
function readNumber() {
    let number = prompt("Put a number");
    if (number == null || number == '') {
        console.log('Null');
    } else {
        console.log(+number);
    }
}

// 2.2
function readNumber() {
    let number
    do {
        number = prompt("Put a number"); 
    } while (!isFinite(number));

    if (number === null || number === '') { 
        console.log(null);
        return null
    } else {
        console.log(+number);
        return +number
    }
}

// readNumber()

// 3 Вбудована функція Math.random() створює випадкове значення від 0 до1 (не враховуючи 1).
// Напишіть функцію random(min, max) для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).
// Приклади його роботи:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.34352345

// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }

// 4. Створіть функцію randomInteger(min, max), яка генерує випадкове ціле число від min до max включно.
// Будь-яке число з інтервалу min..max повинно з’являтися з однаковою ймовірністю.
// Приклади його роботи:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

function randomInteger(min, max) {
  let int = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(int);
}
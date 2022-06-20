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

// function readNumber() {
//     let number = prompt("Put a number");
//     if (number == null || number == '') {
//         console.log('Null');
//     } else {
//         console.log(+number);
//     }
// }

readNumber()

function readNumber() {
    let number
    do {
        number = prompt("Put a number"); 
    } while (!isFinite(number));

    if (number == null || number == '') { 
        console.log(null);
        return null
    } else {
        console.log(+number);
        return +number
    }

    
}

readNumber()
let i = 0;
// 1.Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (i; i<=10; i++) {
//     if(i % 2 == 0 ) continue;
//     i++
//     console.log(i);
// }

// 2.Замініть цикл for на while так, щоб поведінка не змінилася (щоб вивід залишився той самий).
// for (let i = 0; i < 3; i++) { console.log( `число ${i}!` ); }

// while (i<3) {
//     console.log(`число ${i}!`)
//     i++
// }

// 3. Напишіть цикл, який пропонує prompt ввести число більше за 100. Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.
// Цикл повинен запитувати число доти, доки відвідувач не введе число, більше за 100, або не скасує ввід/введе порожній рядок.
// Ми припускаємо, що відвідувач вводитиме лише числа. В цьому завданні не обов’язково реалізовувати оброблення не-числового введення.

// for (i; i<=100; i++){
//     let value = prompt('Enter a number greater than 100', 10);
//     if (value < 100 && value) {
//         i++;
//     } else {
//         console.log(value)
//         break
//     }
// }

// 4.Вивести прості числа
// Просте число – це натуральне число, яке має два дільники (1 і саме число).
// Інакше кажучи, n > 1 – просте, якщо воно більше за 1 і ділиться без остачі на 1 та n.
// Наприклад, число 5 – просте, тому що воно не ділиться без остачі на 2, 3 і 4. Воно ділиться без остачі лише на 1 і на 5.
// Напишіть код, який виводить всі прості числа в діапазоні від 2 до n.Для n = 10 результат повинен бути 2,3,5,7.
// P.S. Код також повинен легко модифікуватися для будь-якого числа n.


// 5. Напишіть код з використанням if..else, що відповідає наступній конструкції switch:
// switch (browser) {
//     case 'Edge':
//         alert( "You've got the Edge!" );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Ми підтримуємо і ці браузери' );
//         break;
//
//     default:
//         alert( 'Маємо надію, що ця сторінка виглядає добре!' );
//
// }

// if (browser === "Edge") {
//     alert( "You've got the Edge!" );
// } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
//     alert( 'Ми підтримуємо і ці браузери' );
// } else {
//     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
// }

// 6. Перепишіть код нижче використовуючи одну конструкцію switch:
//     let a = +prompt('a?', '');
//
//     if (a == 0) {
//         alert( 0 );
//     }
//     if (a == 1) {
//         alert( 1 );
//     }
//
//     if (a == 2 || a == 3) {
//         alert( '2,3' );
//     }

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

// 7. Перепишіть функцію, щоб вона робила теж саме, але без if і в один рядок.
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }
//
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Батьки дозволили?');
// }
//
// function checkAge(age) {
//     return (age > 18) || confirm('Батьки дозволили?');
// }

// 8. Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.?
// function min(a,b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }
// function min (a,b) {
//     return a < b ? a : b;
// }

// let min1 = min(2, 5)
// console.log(min1)
// let min2 = min(3, -1)
// console.log(min2)
// let min3 = min(1, 1)
// console.log(min3)

// 9. Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n.
// Інакше кажучи, множить число x саме на себе n разів і повертає результат.

// function pow(x,n) {
//     let result = x

//     for(let i=1; i<n; i++ ) {
//         result *= x
//     }
//     console.log(result)
//     return result
// }
// let n  = prompt("Введіть N", '');
// let x  = prompt("Введіть X", '');

// if (n < 1) {
// alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
// } else {
// alert( pow(x, n) );
// }

// 10. Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function() { alert("Ви погодились."); },
//   function() { alert("Ви скасували виконання."); }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//     "Ви згодні?",
//     () => alert("Ви погодились."),
//     () => alert("Ви скасували виконання.")
//   );

function hello(name) {
    let phrase = 'hello, ${name}!';

    say(phrase)
}

function say(phrase) {
    alert('** ${phrase} **');
}
hello('oleg');
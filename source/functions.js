// Розв'язати задачу.
// До залізничної станції прибув потяг з десятьма цистернами соняшникової олії, ртуті та води (oil, water, mercury).
// Кількість цистерн: ртуть - 2, вода - 5, олія - 3. Кожна цистерна має об'єм 1000 літрів. Яка загальна маса рідин прибула
// на станцію якщо 1(одна) тисяча літрів олії важить 926 кг., ртуті 1355 кг. та води 1000 кг.
const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
// Визначення ваги одного типу рідини має бути реалізовано викликом функції getWeight аргументами якої будуть weight, liquid, count.

// function getWeight(liquid, count) {
//     if (liquid === 'OIL') {
//         return count * OIL;
//     } else if (liquid === 'WATER') {
//         return count * WATER;
//     }
//     else if (liquid === 'MERCURY') {
//         return count * MERCURY
//     }
// }

function getWeight(liquid, count) {
    return count * liquid;
}

console.log(getWeight(OIL, 3));

// Написати функцію для зведення числа в ступінь рекурсивним шляхом. Функція має приймати два аргумента: число та ступінь,
//     повертати результат. Умова - без використаня **, math.pow та циклу, тільки рекурсія.
// Iteration
// function pow(num, st) {
//     let  result = 1;
//     for(let i =0; i < st; i++) {
//         result *= num
//     }
//     return result;
// }
// Recursive
function pow(num, st) {
    if (st === 1) {
        return num;
    } else {
        return num * pow (num,st - 1);
    }
}

console.log(pow(3, 4));

// 1. Напишіть деструктуроване присвоєння, яке зчитує:
// властивість name у змінну name.
// властивість years у змінну age.
// властивість isAdmin у змінну isAdmin (false, якщо така властивість відсутня)
// Ось приклад значень після вашого присвоєння:

let user = { name: "Іван", years: 30 };

let{ name, years: age, isAdmin = false } = user
// ... = user

console.log( name ); // Іван
console.log( age ); // 30
console.log( isAdmin ); // false

// 2. Створіть функцію topSalary(salaries) яка повертає ім’я найбільш високооплачуваної особи.
// Якщо об’єкт salaries пустий, функція повинна повернути null.
// Якщо є кілька високооплачуваних осіб, поверніть будь-якого з них.
// P.S. Використовуйте Object.entries і деструктурування для перебору пар ключ/значення.

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};
function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for(let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    console.log(maxName);
    return maxName
}
topSalary(salaries)

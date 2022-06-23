// 1.Давайте спробуємо 5 операцій з масивом
// 1.1 Створіть масив styles з елементами “Jazz” та “Blues”.
// 1.2 Додайте “Rock-n-Roll” в кінець масиву.
// 1.3 Замініть значення в середині масиву на “Classics”. Ваш код повинен шукати медіанний елемент у масивах будь-якої довжини.
// 1.4 Видаліть перший елемент масиву та покажіть його.
// 1.5 Вставте Rap та Reggae на початок масиву.

//1.1
let styles =['Jazz', 'Blues'];
//1.2
styles.push('Rock-n-roll');
console.log(styles);
// 1.3
let mediana = Math.floor((styles.length - 1) / 2)
console.log(mediana);
styles[mediana] = 'Classics';
console.log(styles);
// 1.4
let first = styles.shift();
console.log(first);
// 1.5
styles.unshift('Rap', 'Reggae');
console.log(styles);

//2. Напишіть функцію sumInput() яка:
// Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
// Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
// Підраховує та повертає суму елементів масиву.
// P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0.

function sumInput() {
    let arr = [];

    while (true) {
        let input = prompt('Input number')
        if(input === '' || input === null || !isFinite(input)) break
        arr.push(+input);
        console.log(arr);
    }

    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    console.log(sum)
    return (sum)
}

sumInput();
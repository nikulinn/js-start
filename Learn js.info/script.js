// 1.Нехай arr – це масив
// Потрібно створити функцію unique(arr), яка повинна повертати масив унікальних елементів arr.

function unique(values) {
    let arr = new Set(values);
    for (let user of arr) {
        alert(user);
    }
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
              "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// alert( unique(values) ); // Hare, Krishna, :-O

// From javascript.info
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// 2.Відфільтруйте анаграми
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // розділіть слово на літери, відсортуйте їх та знову з'єднайте
        let sorted = word.toLowerCase() // (*)
        console.log('toLOWER', sorted);
        let split = sorted.split('');
        console.log('split', split);
        let sort = split.sort();
        console.log('sort', sort);
        let join = sort.join('');
        console.log('join', join);

        map.set(join, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );

// 3. Перебираємо ключі
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
console.log(keys)
// Помилка: keys.push -- це не функція
keys.push("more");

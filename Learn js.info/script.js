// Завдання 1
// Маючи строку names = "andrey, roman, alex, oleg" дописати функцію convertStrToArray яка має повертати [andrey, roman, alex, oleg]
let names = "andrey, roman, alex, oleg"
function convertStrToArray(str) {
    return str.split(',');
}
convertStrToArray(names);


// Завдання 2
// Маючи масив обєктів [{ name: 'Dima', admin: true }, { name: 'Andrey', admin: false }, { name: 'Oleg', admin: true }, { name: 'Alex', admin: false }].
// Потрібно дописати фунцкію getAllAdminUsers яка повина повертати новий масив юзерів у яких поле admin = true

const array = [{ name: 'Dima', admin: true }, { name: 'Andrey', admin: false }, { name: 'Oleg', admin: true }, { name: 'Alex', admin: false }]
function getAllAdminUsers(array) {
       return array.filter(el => el.admin );
}
getAllAdminUsers(array);

// Завдання 3
// Маючи строку numbers = "4, 56, 23, 43, 14" потрібно спочатку конвертнути її в масив потім повернути оновлений масив де кожна цифра буде перемножена на 2
let str = "4, 56, 23, 43, 14"
function strToArray(str) {
    return str.split(',').map(x => x * 2);
}
strToArray(str);

// Завдання 4
// маючи масив ["angular", "react", "react", "angular", "react", "vue", "vue", "angular", "react"] потрібно написати функцію використовуючи reduce якаб повернула обєкт
// { angular: 3, react: 4, vue: 2 }

const lang = ["angular", "react", "react", "angular", "react", "vue", "vue", "angular", "react"]
function countDuplicate(data){
    const map = data.reduce((prev, cur) => {
            prev[cur] = (prev[cur] || 0) + 1;
            return prev;
        }, {});
}
countDuplicate(lang);
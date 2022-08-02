// Завдання 1
// Маючи строку names = "andrey, roman, alex, oleg" дописати функцію convertStrToArray яка має повертати [andrey, roman, alex, oleg]
let names = "andrey, roman, alex, oleg"
function convertStrToArray(str) {
    let array = str.split(', ');
    console.log(array);
    return array;
}
// convertStrToArray(names);


// Завдання 2
// Маючи масив обєктів [{ name: 'Dima', admin: true }, { name: 'Andrey', admin: false }, { name: 'Oleg', admin: true }, { name: 'Alex', admin: false }].
// Потрібно дописати фунцкію getAllAdminUsers яка повина повертати новий масив юзерів у яких поле admin = true

let array = [{ name: 'Dima', admin: true }, { name: 'Andrey', admin: false }, { name: 'Oleg', admin: true }, { name: 'Alex', admin: false }]
function getAllAdminUsers(array) {
       const admin = array.filter(el => {
           if (el.admin == true) {
               return el
           }
       })
       console.log(admin);
       return admin;
}
// getAllAdminUsers(array);

// Завдання 3
// Маючи строку numbers = "4, 56, 23, 43, 14" потрібно спочатку конвертнути її в масив потім повернути оновлений масив де кожна цифра буде перемножена на 2
let str = "4, 56, 23, 43, 14"
function strToArray(str) {
    let arr = str.split(', ')
    let newArr = arr.map(x => x * 2);
    console.log(newArr);
    return newArr;
}
// strToArray(str);

// Завдання 4
// маючи масив ["angular", "react", "react", "angular", "react", "vue", "vue", "angular", "react"] потрібно написати функцію використовуючи reduce якаб повернула обєкт
// { angular: 3, react: 4, vue: 2 }

let lang = ["angular", "react", "react", "angular", "react", "vue", "vue", "angular", "react"]
function count_duplicate(arr){
    let counts = {}

    for(let i =0; i < arr.length; i++){
        if (counts[arr[i]]){
            counts[arr[i]] += 1
        } else {
            counts[arr[i]] = 1
        }
    }
    console.log(counts)
    return counts;
}
count_duplicate(lang);
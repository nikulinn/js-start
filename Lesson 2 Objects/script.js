// 1. 
// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.

// let user = {};
// user.name = 'Ivan';
// user.surname = 'Smit';
// user.name = 'Petr';
// delete user.name;

// 2. Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
// Має так працювати:
    // let schedule = {};
    // alert( isEmpty(schedule) ); // true
    // schedule["8:30"] = "Вставай";
    // alert( isEmpty(schedule) ); // false


// let schedule = {};
// schedule["8:30"] = "Вставай";
// schedule["9:30"] = "Працюй";
// schedule["13:30"] = "Обідай";

// let obj = {};
// function isEmpty(obj) {
//     let key = obj.key
//     // for (let key in obj) {
//         if (key in obj == undefined) {
//             return false;
//         } else {
//             return true;
//         }
//     // }
// }

// isEmpty(obj);
// in example
// function isEmpty(obj) {
//     for (let key in obj) {
//       // якщо цикл розпочався, властивість є
//       return false;
//     }
//     return true;
//   }

// 3. У нас є об’єкт для зберігання заробітної плати нашої команди:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let salaries2 = {}
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.
// Якщо об’єкт salaries порожній, то результат має бути 0.

// function salariesSum(obj) {
//     let isEmpty;
//     let sum = 0;

//     for (key in obj) {
//         isEmpty = false
//         sum += obj[key]
//     }
//     console.log('sum ', sum)
// }

// salariesSum(salaries);
// salariesSum(salaries2);

// 4. Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
// до виклику функції
let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if ((typeof obj[key]) == 'number') {
            obj[key] = obj[key] * 2;
            console.log(obj[key]);
        }
    } 
}

// example
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

multiplyNumeric(menu);
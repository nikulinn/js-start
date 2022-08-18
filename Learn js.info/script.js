// 1) * Task description: Write a method that returns a duplicate-free array 
//     * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
const arr = [1, 2, 3, 1, 2]
// 1.1 const newArr = [... new Set(arr)];
// console.log(newArr);

// 1.2 const newArr = arr.filter((el, index) => arr.indexOf(el) === index);
// console.log(newArr);

// 1.3
// const newArr = []
// arr.forEach(el => {
//     if (!newArr.includes(el)) {
//         newArr.push(el);
//     }
// });
// console.log(newArr);

function removedDublicate(data) {
    return data.filter((el, index) => data.indexOf(el) === index);
}
console.log('removedDublicate', removedDublicate(arr))

// 2) (із зірочкою) двохсторонній diff двох масивів, тобто [1, 2, 4] <> [1, 2, 3, 5] == [3, 4, 5]
const arr1 = [1, 2, 4];
const arr2 = [1, 2, 3, 5];

function getDiference(arrayOfNumbers, arrayOfNumbers2) {
    return arrayOfNumbers.filter(el => {
       return !arrayOfNumbers2.includes(el)
    });
}

const difference = [
    ...getDiference(arr2, arr1),
    ...getDiference(arr1, arr2)
]
console.log('difference', difference);

// 3) зробити всі елементи масиву унікальними 
// [ { email: ’oleg@email.com’, age: 25 }, { email: ’ron@email.com’, age: 20 }, { email: ’oleg@email.com’, age: 25 }, { email: ’vit@email.com’, age: 30 } ]
const data =  [ { email: 'oleg@email.com', age: 25 }, { email: 'ron@email.com', age: 20 }, { email: 'oleg@email.com', age: 25 }, { email: 'vit@email.com', age: 30 } ];

function uniqueEmail(data) {
    const newData = []
    const unique = data.filter(element => {
        const isDublicate = newData.includes(element.email);

        if (!isDublicate) {
            newData.push(element.email);
            return true;
        }
        return false
        
    })

    return newData
}

console.log('removedDublicate', uniqueEmail(data));
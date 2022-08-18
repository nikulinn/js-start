// 1) * Task description: Write a method that returns a duplicate-free array 
//     * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
const arr = [1, 2, 3, 1, 2]
// 1.1 const newArr = [... new Set(arr)];
// console.log(newArr);

// 1.2 const newArr = arr.filter((el, index) => arr.indexOf(el) === index);
// console.log(newArr);

// 1.3
const newArr = []
arr.forEach(el => {
    if (!newArr.includes(el)) {
        newArr.push(el);
    }
});
console.log(newArr);


// 2) (із зірочкою) двохсторонній diff двох масивів, тобто [1, 2, 4] <> [1, 2, 3, 5] == [3, 4, 5]



// 3) зробити всі елементи масиву унікальними 
// [ { email: ’oleg@email.com’, age: 25 }, { email: ’ron@email.com’, age: 20 }, { email: ’oleg@email.com’, age: 25 }, { email: ’vit@email.com’, age: 30 } ]
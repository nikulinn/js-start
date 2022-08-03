// Завдання 1
// Маючи масив users потрібно порахувати кількість юзерів та записати в поле usersCount.
// Потім написати ітерацію використовуючи while в якій потрібно в кожній ітерації шукати юзера по індексу в масиві використовуючи зміну usersCount та оновлювати поле admin
// на true якщо воно не є таким. після кожної ітераціїї usersCount має зменшуватись на одиницю. while має запускатись поки usersCount не стане 0
let users = [
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: false },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: false },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: false },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: false },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: true },
    { name: 'Test1', admin: false },
    { name: 'Test1', admin: true }
];

let usersCount = users.length
console.log('usersCount:', usersCount)

function whileFunc() {
    let i = 0
    while (i < usersCount) {
        let admin = users[i].admin
        console.log('before:', admin)
        if (admin == false) {
            admin = true;
        }
        console.log('after:', admin);
        usersCount--;
        console.log('usersCount:', usersCount)
    }
}
// whileFunc();

// Завдання 2
// Маючи той самий масив зробити таку ж дію використовуючи конструкцію for

function forFunc() {
    for (let j = 0 ; j <= usersCount; usersCount--){
        let admin = users[j].admin
        console.log('before:', admin)
        if (admin == false) {
            admin = true;
        }
        console.log('after:', admin);
        console.log('usersCount:', usersCount)
    }
}
forFunc();







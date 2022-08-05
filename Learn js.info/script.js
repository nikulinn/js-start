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

function whileFunc(users) {
    let i = 0
    let usersCount = users.length
    while (i < usersCount) {
        let adminValue = users[i].admin;
        if (!adminValue) {
            users[i].admin = true;
        }
        usersCount--;
    }
}
whileFunc(users);

// Завдання 2
// Маючи той самий масив зробити таку ж дію використовуючи конструкцію for

function forFunc(users) {
    let usersCount = users.length

    for (let i = 0 ; i < users.length; i++){
        let adminValue = users[i].admin;
        if (!adminValue) {
            users[i].admin = true;
        }
        usersCount--;
    }
}

forFunc(users);







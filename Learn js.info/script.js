// Завдання 1
// Створити об'єкт timer з такими полями day = Monday, hours = 12, minutes = 40, seconds = 20, finished = false

const timer = {
    day: 'Monday',
    hours: 12,
    minutes: 40,
    seconds: 20,
    finished: false
}

// Завдання 2
// в даній функції порібно оновити передані поля обєкта в створеному вище обєктові таймер

function updateTimer(hours, minutes) {
    timer.hours = hours;
    timer.minutes = minutes;
}

// updateTimer(18, 36);

// Завдання 3
// В даній функції потрібно вивести дані таймера в такому форматі "Monday, 18:36:20 is finished false"

function getTimerInfo() {
    return `${timer.day}, ${timer.hours}:${timer.minutes}:${timer.seconds} is finished ${timer.finished}`;
}
getTimerInfo()

// Завдання 4
// Створити об'єкт user з полем name = 'Oleg' в якому не можливо буде змінити поле name

const user = Object.freeze({name: 'Oleg'});

// Завдання 5
// створити об'єкт timer з такими полями day = Monday, hours = 12, minutes = 40, seconds = 20, finished = false.
// дописати функцію removeFinished яка повина видалити поле finished з обєкту timer

function removeFinished() {
    delete timer.finished;
}

removeFinished()

// Завдання 6
// Маючи обєкт user з такими полями firstName = "Armin" lastName = "van Buuren" потрібно написати метод обєкта fullName який має повернути "Armin van Buuren"
const dj = {
    firstName: 'Armin',
    lastName: 'van Buuren'
}

const user = {
    firstName: 'Armin',
    lastName: 'van Buuren',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}


// Завдання 7
// Потрібно створити обєкт user з такими полям firstName = "Armin" lastName = "van Buuren", а потім створити копію цього обєкту в інший обєкт user2 але так,
// щоб при зміні полів firstName та lastName в обєктові user2 дані не змінювались в першого

const djCopy =  { ...dj };

for (let key in dj) {
    djCopy[key] = dj[key];
}
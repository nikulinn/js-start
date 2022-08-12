// Завдання 1
// Маючи масив обєктів buttons потрібно створити класи ProductButton та RegularButton які будуть наслідуватись від класу Button.
// У кожного з класів ProductButton та RegularButton мають бути функції які повертатимуть чи це продуктовий батон чи регуляр, також мають бути методи які повертатимуть кожне поле з common, mobile та tablet
// Також потрібно написати функції які б оновлювали б значення в цих полів

// const buttons = [
//     { name: 'Button 1', type: 'product', common: { color: '#FFF', background_color: '#262626' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' } },
//     { name: 'Button 2', type: 'product', common: { color: '#FFF', background_color: '#DDDDDD' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
//     { name: 'Button 3', type: 'regular', common: { color: '#FFF', background_color: '#CDCDCD' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
//     { name: 'Button 4', type: 'regular', common: { color: '#FFF', background_color: '#262626' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
// ]

// class Button {
//     constructor(options) {
//         this.name = options.name,
//         this.type = options.type,
//         this.common = options.common,
//         this.mobile = options.mobile,
//         this.tablet = options.tablet
//     };

//     get getType() {
//         return this.type;
//     }

//     get getName() {
//         return this.name;
//     }

//     get getCommon() {
//         return this.common;
//     }

//     get getMobile() {
//         return this.mobile;
//     }

//     get getTablet() {
//         return this.tablet;
//     }

//     set setType(newType) {
//         this.type = newType;
//     }

//     set setName(newName) {
//         this.name = newName;
//     }

//     set setCommon(newCommon) {
//         this.common = newCommon;
//     }

//     set setMobile(newMobile) {
//         this.mobile = newMobile;
//     }

//     set setTablet(newTablet) {
//         this.tablet = newTablet;
//     }
// }

// class RegularButton extends Button {}
// class ProductButton extends Button {}

// let productButons;
// let regularButons;

// for (let button of buttons) {
//     if (button.type === 'product') {
//         productButons = new ProductButton(button);
//     } else {
//         regularButons = new RegularButton(button);
//     }
// }

// 2.Переписати функцію Users на клас

class User {
    constructor() {
        this.workTime = 0
        this.startWorkDate = 0
        this.interval = 0
    }

    workingProcess() {
        this.workTime = new Date;
    }

    startWork() {
        this.startWorkDate = new Date;
        this.interval = setInterval(this.workingProcess.bind(this), 1000);
        console.log('this.startWork', this.startWorkDate);
        console.log('this.interval', this.interval);
    }

    stopWork() {
        clearInterval(this.interval);

        console.log(`${this.startWorkDate} - ${this.workTime}`);
    }
}

const user = new User()

user.startWork();
setTimeout(user.stopWork.bind(user), 10000);
// setTimeout(() => {user.stopWork()}, 10000);
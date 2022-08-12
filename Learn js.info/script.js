// Завдання 1
// Маючи масив обєктів buttons потрібно створити класи ProductButton та RegularButton які будуть наслідуватись від класу Button.
// У кожного з класів ProductButton та RegularButton мають бути функції які повертатимуть чи це продуктовий батон чи регуляр, також мають бути методи які повертатимуть кожне поле з common, mobile та tablet
// Також потрібно написати функції які б оновлювали б значення в цих полів

const buttons = [
    { name: 'Button 1', type: 'product', common: { color: '#FFF', background_color: '#262626' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' } },
    { name: 'Button 2', type: 'product', common: { color: '#FFF', background_color: '#DDDDDD' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
    { name: 'Button 3', type: 'regular', common: { color: '#FFF', background_color: '#CDCDCD' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
    { name: 'Button 4', type: 'regular', common: { color: '#FFF', background_color: '#262626' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
]

// Завдання 2
class Button {
    constructor(options) {
        this.name = options.name,
        this.type = options.type,
        this.common = options.common,
        this.mobile = options.mobile,
        this.tablet = options.tablet
    };

    get type() {
        return this.type;
    }

    get name() {
        return this.name;
    }

    get common() {
        return this.common;
    }

    get mobile() {
        return this.mobile;
    }

    get tablet() {
        return this.tablet;
    }

    set type(newType) {
        this.type = newType;
    }

    set name(newName) {
        this.name = newName;
    }

    set common(newCommon) {
        this.common = newCommon;
    }

    set mobile(newMobile) {
        this.mobile = newMobile;
    }

    set tablet(newTablet) {
        this.tablet = newTablet;
    }
}
for (let i of buttons) {
    const btn = new Button(i)
}


class RegularButton extends Button {};
class ProductButton extends Button {};

// const Tst = new RegularButton(buttons)

// const ProductButton = new Button();
// console.log(RegularButton)



// Переписати функцію Users на клас

//
// function User(user) {
//     let interval;
//     let startWork;
//     let workTime;
//
// 	this.workingProcess = function() {
//         workTime = new Date;
//     }
//
// 	this.startWork = function() {
//         startWork = new Date;
//
// 		interval = setInterval(this.workingProcess, 1000);
//     }
//
// 	this.stopWork = function() {
//         clearInterval(interval);
//
// 		console.log(`${startWork} - ${workTime}`);
//     }
// }
//
// const user = new User()
//
// user.startWork();
//
// setTimeout(user.stopWork, 10000);

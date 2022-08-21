const users = [
	{ id: 1, firstName: 'Alex', lastName: 'Smith' },
	{ id: 2, firstName: 'Daniel', lastName: 'Wrong' }
]

const tasks = [
	{userId: 1, id: 3, title: 'fugiat veniam minus', completed: false, tags: 'work,hobby'},
	{userId: 1, id: 4, title: 'et porro tempora', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false, tags: 'personal,hobby'},
	{userId: 1, id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis', completed: false, tags: 'personal,hobby'},
	{userId: 1, id: 7, title: 'illo expedita consequatur quia in', completed: false, tags: 'personal,hobby'},
	{userId: 1, id: 8, title: 'quo adipisci enim quam ut ab', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 9, title: 'molestiae perspiciatis ipsa', completed: false, tags: 'personal,hobby'},
	{userId: 1, id: 10, title: 'illo est ratione doloremque quia maiores aut', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 11, title: 'vero rerum temporibus dolor', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 12, title: 'ipsa repellendus fugit nisi', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 13, title: 'et doloremque nulla', completed: false, tags: 'personal,hobby'},
	{userId: 1, id: 14, title: 'repellendus sunt dolores architecto voluptatum', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 15, title: 'ab voluptatum amet voluptas', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 16, title: 'accusamus eos facilis sint et aut voluptatem', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 17, title: 'quo laboriosam deleniti aut qui', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 18, title: 'dolorum est consequatur ea mollitia in culpa', completed: false, tags: 'personal,hobby'},
	{userId: 1, id: 19, title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil', completed: true, tags: 'personal,hobby'},
	{userId: 1, id: 20, title: 'ullam nobis libero sapiente ad optio sint', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 21, title: 'suscipit repellat esse quibusdam voluptatem incidunt', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 22, title: 'distinctio vitae autem nihil ut molestias quo', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 23, title: 'et itaque necessitatibus maxime molestiae qui quas velit', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 24, title: 'adipisci non ad dicta qui amet quaerat doloribus ea', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 25, title: 'voluptas quo tenetur perspiciatis explicabo natus', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 26, title: 'aliquam aut quasi', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 27, title: 'veritatis pariatur delectus', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 28, title: 'nesciunt totam sit blanditiis sit', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 29, title: 'laborum aut in quam', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 30, title: 'nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 31, title: 'repudiandae totam in est sint facere fuga', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 32, title: 'earum doloribus ea doloremque quis', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 33, title: 'sint sit aut vero', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 34, title: 'porro aut necessitatibus eaque distinctio', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 35, title: 'repellendus veritatis molestias dicta incidunt', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 36, title: 'excepturi deleniti adipisci voluptatem et neque optio illum ad', completed: true, tags: 'personal,hobby'},
	{userId: 2, id: 37, title: 'sunt cum tempora', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 38, title: 'totam quia non', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 39, title: 'doloremque quibusdam asperiores libero corrupti illum qui omnis', completed: false, tags: 'personal,hobby'},
	{userId: 2, id: 40, title: 'totam atque quo nesciunt', completed: true, tags: 'personal,hobby'}
]

/*
	Маючи два масиви users та tasks потрібно створити для ник клас. 
	В класі юзера мають бути такі методи
		- id = має повертати айдіху юзера
		- fullName = має повертати повний нейм юзера
		- comppletedTask = (має повертати всі закомплічені таски даного юзера)
		- unComppletedTask = (має повертати всі не закомплічені таски даного юзера)
		- total = має повертати суму тасків юзера в залежності від параметра який ти передаси (all, completed, uncompleted)
		- findTask = метод який приймає id таски та має повертати конкретний таск

	В класі тудухи мають бути такі методи
		- id = має повертати айдіху юзера
		- title = має повертати тайтл таски
		- isCompleted = має повертати чи таск завершений чи ні
		- tags = має повертати масив тегів
		- slug = має повертати title в форматі урли (this-is-slug-url)
*/

class User {
    constructor(users, task) {
       
        this.id = users.forEach(user => user.id),
        // this.firstName = users.firstName,
        // this.lastName = users.lastName,
        // this.completedTask = task.completed
        // console.log(this.id)
    }

    get id() {
        let user = users.forEach(user => user.id);

        console.log(this.id)
    }

    set #id(newId) {
        this.id = newId;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`; 
    }

    completedTask() {
		console.log(this.completedTask)
		console.log(tasks)
		return tasks;
        // tasks.forEach(task => {
		// 	console.log(task)
        //     if (task.completed === true) {
        //         return task;
        //     }
        // })
    }
}

function completedTask(tasks) {
	tasks.forEach(task => {

		if (task.completed === true) {
			console.log(task)
			return task;
		}
	})
}

	// completedTask(tasks);

const user = new User(users, tasks);



const buttons = [
    { name: 'Button 1', type: 'product', common: { color: '#FFF', background_color: '#262626' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' } },
    { name: 'Button 2', type: 'product', common: { color: '#FFF', background_color: '#DDDDDD' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
    { name: 'Button 3', type: 'regular', common: { color: '#FFF', background_color: '#CDCDCD' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
    { name: 'Button 4', type: 'regular', common: { color: '#FFF', background_color: '#262626' }, mobile: { font_size: '16px' }, tablet: { font_size: '18px' }  },
]

class Button {
    constructor(options) {
        this.name = options.name,
        this.type = options.type,
        this.common = options.common,
        this.mobile = options.mobile,
        this.tablet = options.tablet
    };

    get #type() {
        return this.type;
    }

    get #name() {
        return this.name;
    }

    get #common() {
        return this.common;
    }

    get #mobile() {
        return this.mobile;
    }

    get #tablet() {
        return this.tablet;
    }

    set #type(newType) {
        this.type = newType;
    }

    set #name(newName) {
        this.name = newName;
    }

    set #common(newCommon) {
        this.common = newCommon;
    }

    set #mobile(newMobile) {
        this.mobile = newMobile;
    }

    set #tablet(newTablet) {
        this.tablet = newTablet;
    }
}
const newBtn = new Button(buttons)

class RegularButton extends Button {}
class ProductButton extends Button {}

let productButons;
let regularButons;

for (let button of buttons) {
    if (button.type === 'product') {
        productButons = new ProductButton(button);
    } else {
        regularButons = new RegularButton(button);
    }
}
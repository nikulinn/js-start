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
*/

class User {
	static ALL = 'all';
	static COMPLETED = 'completed';
    static UNCOMPLETED = 'uncompleted';

    constructor(user, tasks) {
        this.id = user.id,
        this.firstName = user.firstName,
        this.lastName = user.lastName
		this.tasks = tasks.filter(task => task.userId === this.id)
    }

    get id() {
       return this.id;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    completedTask() {
        return this.tasks.filter(task => task.completed);
    }

    unCompletedTask() {
        return this.tasks.filter(task => !task.completed);
    }

    total(condition) {
        if (condition === User.ALL) {
            return this.tasks.length;
        } else if (condition === User.COMPLETED) {
            return this.completedTask().length;
        } else if (condition === User.UNCOMPLETED){
            return this.unCompletedTask().length;
        }
    }

    findTask(id) {
        return tasks.find(task => task.id === id)
    }
}

const userData = users.map(user => new User(user, tasks))

/*
	В класі тудухи мають бути такі методи
		- id = має повертати айдіху юзера
		- title = має повертати тайтл таски
		- isCompleted = має повертати чи таск завершений чи ні
		- tags = має повертати масив тегів
		- slug = має повертати title в форматі урли (this-is-slug-url)
*/
class ToDo {

    constructor(task) {
        this.id = task.id,
        this.title = task.title,
        this.completed = task.completed,
		this.tags = task.tags
    }

    get id() {
        return this.id;
    }

	get title() {
        return this.title;
    }

	get isCompleted() {
		return this.completed;
	}

	get tags() {
		return this.tags.split(',');
	}

    get slug() {
		return this.title.split(' ').join('-').toLowerCase();
	}
}

const userTasks = tasks.map(task => new ToDo(task));

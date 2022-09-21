/*
    class User
    + метод має поверати full_name в такому форматі “Alex Smith” зверни увагу що перші літери мають бути в верхньому регістрі
    + метод який має знаходиит poll по id
*/
const data = [
    {
        id: 1,
        first_name: "alex",
        last_name: "smith",
        polls: [
            {
                id: 1,
                name: "How is the wheather today ?",
                type: "single",
                other: true,
                created_at: "Tue, 14 Jun 2022 23:17:56.726310000UTC + 00:00",
                items: [
                    {
                        id: 1,
                        answer: "It’s good",
                    },
                    {
                        id: 2,
                        answer: "It’s bad",
                    },
                ],
                votes: [1, 1, 1, 1, 2, 2, 2, "awesome", "bad", "awesome", 2, 1],
            },
            {
                id: 2,
                name: "How is the wheather today?",
                type: "multiple",
                other: false,
                created_at: "Tue, 14 Jun 2022 23:17:56.726310000 UTC +00:00",
                items: [
                    {
                        id: 1,
                        answer: "It’s good",
                    },
                    {
                        id: 2,
                        answer: "It’s bad",
                    },
                    {
                        id: 3,
                        answer: "It’s awesome",
                    },
                ],
                votes: [1, 1, 1, 3, 2, 2, 2, 2, 1, 3, 3, 3],
            },
        ],
    },
];

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

class User {
    constructor(data) {
        this.name = data.first_name;
        this.surname = data.last_name;
        this.polls = data.polls;
    }

    get fullName() {
        let name = capitalize(this.name);
        let lastName = capitalize(this.surname);
        return `${name} ${lastName}`;
    }

    findPoll(id) {
        return this.polls.find((poll) => poll.id === id);
    }
}

const newUser = new User(data[0]);
console.log(newUser.fullName);

/*
class Poll
в класі Polls має бути поле де має зберігатись оригінальний обєкт даних та обєкт в якому будуть відбуватись зміни
+ метод який має додавати новий результат в поле  votes
+ метод який має додавати новий item обєкт в масив items
- метод має повертати чи був змінений обєкт чи ні (Poll)
+ метод має повертати статистичну суму резальтата поля votes => { 1: 5, 2: 4, ‘awesome’: 2, bad: 1 }
+ метод який повертає чи other опція ввімкнена
- метод який має повертати масив полів відповідно до його типу (на уточнені)
*/
class Poll {
    constructor(poll) {
        this.original = poll;
        this.poll = JSON.parse(JSON.stringify(this.original));
        this.items = this.poll.items;
        this.votes = this.poll.votes;
        this.other = this.poll.other;
        this.type = this.poll.type;
    }

    addVote(vote) {
        this.votes.push(vote);
    }

    addItem(answer) {
        this.items.push({ id: this.items.length + 1, answer });
    }

    isModified() {
        return JSON.stringify(this.original) !== JSON.stringify(this.poll);
    }

    duplicateCount() {
        return this.votes.reduce((total, current) => {
            total[current] = total[current] + 1 || 1;
            return total;
        }, {});
    }

    get isOther() {
        return this.other;
    }
}
const poll = data[0].polls[1];
const pollCurrent = new Poll(data[0].polls[1]);
pollCurrent.isModified();

//
// pollCurrent.addVote(5);
// pollCurrent.addItem('test');
// console.log('isMofify', pollCurrent.isModified());
// console.log('duplicateCount', pollCurrent.duplicateCount());

// 3. мають бути класи SinglePoll та MultiplePoll які наслідуються від класу Poll тобто при створені полу ти
// має визиват SinglePoll чи MultiplePoll відповідно від статусу

class SinglePoll extends Poll {
    constructor(poll) {
        super(poll);
        this.type = "single";
    }
}

class MultiplePoll extends Poll {
    constructor(poll) {
        super(poll);
        this.type = "multiple";
    }
}

function createPoll(poll) {
    switch (poll.type) {
        case "multiple":
            return new MultiplePoll(poll);
        case "single":
        default:
            return new SinglePoll(poll);
    }
}

createPoll(poll);

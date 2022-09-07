
/*
	class User
	- метод має поверати full_name в такому форматі “Alex Smith” зверни увагу що перші літери мають бути в верхньому регістрі
	class Poll
	в класі Polls має бути поле де має зберігатись оригінальний обєкт даних та обєкт в якому будуть відбуватись зміни
	- метод який має додавати новий результат в поле results
	- метод який має додавати новий item обєк в масив items
	- метод має повертати чи був змінений обєкт чи ні
	- метод має повертати статистичну суму резальтата поля votes => { 1: 5, 2: 4, ‘awesome’: 2, bad: 1 }
	- метод який має знаходиит poll по id
	- метод який повертає чи other опція ввімкнена
	- метод який має повертати масив полів відповідно до його типу
	мають бути класи SinglePoll та MultiplePoll які наслідуються від класу Poll тобто при створені полу ти має визиват SinglePoll чи MultiplePoll відповідно від статусу
*/
const data = [
    {
        id: 1,
        first_name: 'alex',
        last_name: 'smith',
		polls: [
            {
                id: 1,
                name: 'How is the wheather today ?',
                type: 'single',
                other: true,
                created_at: 'Tue, 14 Jun 2022 23:17:56.726310000UTC + 00:00',
                items: [
                    {
                        id: 1,
                        answer: 'It’s good'
                    },
                    {
                        id: 2,
                        answer: 'It’s bad'
                    }
                ],
                votes: [1, 1, 1, 1, 2, 2, 2, 'awesome', 'bad', 'awesome', 2, 1]
            },
            {
                id: 2,
                name: 'How is the wheather today?',
                type: 'multiple',
                other: false,
                created_at: 'Tue, 14 Jun 2022 23:17:56.726310000 UTC +00:00',
                items: [
                    {
                        id: 1,
                        answer: 'It’s good'
                    },
                    {
                        id: 2,
                        answer: 'It’s bad'
                    },
                    {
                        id: 3,
                        answer: 'It’s awesome'
                    }
                ],
                votes: [1, 1, 1, 3, 2, 2, 2, 2, 1, 3, 3, 3]
            }
        ]
    }
]

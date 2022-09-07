const users = [
  {
    id: 1,
    name: 'Alex Smith',
    approved: true,
    likes: 12,
    messages: [
      { text: 'Hello', status: 'new' },
      { text: 'Hello 2', status: 'watched' },
      { text: 'Hello 3', status: 'readed' },
      { text: 'Hello 4', status: 'watched' },
      { text: 'Hello 5', status: 'new' },
      { text: 'Hello 6', status: 'watched' },
      { text: 'Hello 7', status: 'new' },
      { text: 'Hello 8', status: 'readed' },
      { text: 'Hello 9', status: 'watched' },
      { text: 'Hello 10', status: 'watched' },
      { text: 'Hello 11', status: 'watched' },
      { text: 'Hello 12', status: 'new' },
      { text: 'Hello 13', status: 'readed' },
      { text: 'Hello 14', status: 'watched' },
      { text: 'Hello 15', status: 'watched' },
      { text: 'Hello 16', status: 'readed' },
      { text: 'Hello 17', status: 'watched' }
    ]
  },
  {
    id: 2,
    name: 'Alex Rose',
    approved: false,
    likes: 34,
    messages: [
      { text: 'Hello', status: 'watched' },
      { text: 'Hello 2', status: 'watched' },
      { text: 'Hello 3', status: 'readed' },
      { text: 'Hello 4', status: 'watched' },
      { text: 'Hello 5', status: 'watched' },
      { text: 'Hello 6', status: 'watched' },
      { text: 'Hello 7', status: 'watched' },
      { text: 'Hello 8', status: 'readed' },
      { text: 'Hello 9', status: 'watched' },
      { text: 'Hello 10', status: 'watched' },
      { text: 'Hello 11', status: 'watched' },
      { text: 'Hello 12', status: 'new' }
    ]
  },
  {
    id: 3,
    name: 'David Doe',
    approved: true,
    likes: 114,
    messages: [
      { text: 'Hello', status: 'watched' },
      { text: 'Hello 2', status: 'watched' },
      { text: 'Hello 3', status: 'readed' },
      { text: 'Hello 4', status: 'new' },
      { text: 'Hello 5', status: 'watched' },
      { text: 'Hello 6', status: 'new' },
      { text: 'Hello 7', status: 'watched' }
    ]
  },
  {
    id: 4,
    name: 'Daniel Thomas',
    approved: true,
    likes: 21,
    messages: null
  }
]
// 1.  - написати функцію яка має повернути суму всих лайків
function sumLikes (users) {
  return users.reduce((prev, curr) => prev += curr.likes, 0);
}
sumLikes(users)

// 2. - написати фунцкію яка має повернути суму всих повідомлень (messages)
function sumMessages (users) {
  return users.reduce((prev, curr) => prev += (curr.messages ?? []).length, 0);
}
sumMessages(users)

// 3.  - написати фунцію яка має повернути тільки апрувнутих юзерів
function approvedUsers (users) {
  return users.filter(user => {
    if (user.approved) {
      return user.name
    }
  })
}
approvedUsers(users)

// 4. - потрібно написати функцію яка має перевіряти чи є хоч один юзер в кого немає повідомлень та повертати булеве значення
function isMessages (users) {
  return users.some(user => !user.messages);
}
isMessages(users)

// 5. - також має бути фунцкія яка перевірятиме чи у всих юзерів більше 10 лайків і також має повертати булеве значення

function isMoreLikes (users) {
    return users.every(user => user.likes > 10);
}
isMoreLikes(users)

// 6. - написати функцію яка має шукати юзера по id та повертати всі повідомлення відповідно від переданого статуса (status)
function messages (id, status) {
 return users
              .find(user => user.id === id).messages
              ?.filter(message => message.status === status)
              .map(message => message.text) ?? 'No Messages';
}

console.log(messages(4, 'watched'))

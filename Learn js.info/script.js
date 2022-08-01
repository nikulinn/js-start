
    let users = [];
    let userData;
    let userId = 0;

    const addUser = (evt)=>{
        evt.preventDefault();
        let registrationForm = document.querySelector('[data-registration-form]');
        let userName = document.querySelector('[data-registration-name]');
        let userLastName = document.querySelector('[data-registration-surname]');
        let userEmail = document.querySelector('[data-registration-email]');

        let user = {
            id: userId++,
            name: userName.value,
            lastName: userLastName.value,
            email: userEmail.value
        }
        users.push(user);
        registrationForm.reset();
        console.warn('added', { users });

        localStorage.setItem('Users', JSON.stringify(users));
        // clearData();
        loadData();
    }

    function loadData(){
        userData = window.localStorage.getItem('Users');
        // console.log(userData);
        addtoPage(userData);
    }

    function clearData() {
        let userList = document.querySelector('.user__list');
        userList.remove();
    }

    function addtoPage(data) {
        // const userList  = document.createElement('ul')
        const userListWrap = document.querySelector('[data-user-list-wrapper]');
        // console.log(userList.length);
        // userListWrap.append(userList);
        // userList.className = 'user__list';

        userData = JSON.parse(data);
        userData.forEach((el)=>{
            console.log(el);
            const userListItem  = document.createElement('li')
            userListItem.innerHTML = '<p class="user-list-text">' + el.name + '/' + el.lastName + '</p><button class="btn">Edit</button><button class="btn" data-remove>Remove</button>';
            userListWrap.append(userListItem);
            userListItem.className = 'user__list-item';
        });

    }

    function removeItem() {
        let removeBtn = document.querySelector('[data-remove]');

        console.log(removeBtn.parentNode.classList[0]);
    }



    document.addEventListener('DOMContentLoaded', ()=>{
        let submitButton = document.querySelector('[data-registration-button]');
        submitButton.addEventListener('click', addUser);

        loadData()
    });


// class User {
//     constructor(id, name, lastName, email) {
//         this.id = userId;
//         this.name = userName.value;
//         this.lastName = lastName.value;
//         this.email = userEmail.value;
//     }
//
//     addList() {
//
//     }
// };

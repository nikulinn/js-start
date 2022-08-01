
    let users = [];
    let userData;
    let userId = 0;

    const addUser = (evt)=>{
        evt.preventDefault();
        let registrationForm = document.querySelector('[data-registration-form]');
        let userName = document.querySelector('[data-registration-name]');
        let userLastName = document.querySelector('[data-registration-surname]');
        let userEmail = document.querySelector('[data-registration-email]');
        let users =[]
        let user = {
            id: userId++,
            name: userName.value,
            lastName: userLastName.value,
            email: userEmail.value
        }
        users.push(user);
        // Clear fields in form
        registrationForm.reset();
        console.warn(users)
        // Save user to local storage
        saveLocalStorage('Users', users)
        // Add user to user list
        new User(user.id, user.name, user.lastName, user.email).addList();
        deleteUser(user.id);

        // clearData();
        // loadData();
    }


    function saveLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }


    function loadData(){
        userData = window.localStorage.getItem('Users');
        reloadPage(userData);
    }

    function deleteUser(id) {
        let deleteUserButton = document.querySelector('[data-remove]');
        deleteUserButton.addEventListener('click', function() {
            new User(user.id, user.name, user.lastName, user.email).addList();
            console.log(id)
        });
    }

    // function clearData() {
    //     let userList = document.querySelector('.user__list');
    //     userList.remove();
    // }

    function reloadPage(data){
        if (data != null) {
            userData = JSON.parse(data);
            userData.forEach((el)=>{
                let userItem = new User(el.id, el.name, el.lastName, el.email);
                userItem.addList();
                deleteUser(el.id);
            });

        }
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


class User {
    constructor(id, name, lastName, email) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    };

    addList() {
        const userListWrap = document.querySelector('[data-user-list-wrapper]');
        const userListItem = document.createElement('li')
        userListItem.innerHTML = '<p class="user-list-text">' + this.name + '/' + this.lastName + '</p><button class="btn">Edit</button><button class="btn" data-remove="' + this.id + '">Remove</button>';
        userListWrap.append(userListItem);
        userListItem.className = 'user__list-item';
    }
}


    let users = [];

    const addUser = (evt)=>{
        evt.preventDefault();
        let registrationForm = document.querySelector('[data-registration-form]');
        let userName = document.querySelector('[data-registration-name]');
        let userSername = document.querySelector('[data-registration-surname]');
        let userEmail = document.querySelector('[data-registration-email]');
        let userAvatar = document.querySelector('[data-registration-avatar]');

        let user = {
            name: userName.value,
            sername: userSername.value,
            email: userEmail.value,
            avatar: userAvatar.value
        }
        users.push(user);
        registrationForm.reset();
        console.warn('added', {users});

        // userList.textContent = JSON.stringify(users, '\t', 2)
        var restoredSession = JSON.parse(localStorage.getItem('user'));
        console.log(restoredSession);

        localStorage.setItem('Users', JSON.stringify(users));
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        let submitButton = document.querySelector('[data-registration-button]');
        submitButton.addEventListener('click', addUser);

        let userList = document.querySelector('[data-user-list] p');
        let buffer;

        let userLists = users.forEach(function (index, val)) {
            for(var i=0; i < val.length; i++){
                var item = val[i];
                console.log(item.name);
                buffer+=" <li><a href='#"+item.name+"'>"+item.name+"</a></li> <li><a href='#"+item.command+"'>"+item.command+"</a></li>";
            }
        }

    });



// function save(){
//     var text_to_save = registrationForm.value;
//     localStorage.setItem("text", text_to_save); // save the item

//     window.onload = function() {}
// // }
// class User {
//     constructor(el) {
//         this.name = userName.value;
//         this.surname = userSername.value;
//         this.email = userEmail.value;
//         this.avatar = userAvatar.value;
//     };
// };

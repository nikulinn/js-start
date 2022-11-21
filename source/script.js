// Використовуючи сервіс https://jsonplaceholder.typicode.com/ потрібно написати маленьку ui де ти мож по кліку на батон
//  отримувати список постів, та
// віддображати список отриманх потсів на ui,
// також має бути можливість створити пост,
// видаляти пост та
// редагування поста

// const API = new FetchWrapper("https://jsonplaceholder.typicode.com");

window.onload = function () {
    const showPosts = document.querySelector("[data-show-post]");
    const listWrap = document.querySelector("[data-post-list]");
    const createFieldTitle = document.querySelector("[data-field-title]");
    const createFieldBody = document.querySelector("[data-field-body]");
    const createPostButton = document.querySelector("[data-button-create]");
    const postQuantity = "";
    const titleField = document.querySelector("[data-field-title]");
    const bodyField = document.querySelector("[data-field-body]");

    async function fetchData() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => {
                createList(posts);
            });
    }

    async function getPostList() {
        posts = await fetchData();
        return posts;
    }

    function createList(posts) {
        posts.forEach((post) => {
            let list = `<li id="post-${post.id}"><div class="list-wrap"><h6>${post.id}. <span data-post-title="${post.id}">${post.title}</span></h6><button type="button" class="btn-edit" data-edit-item="${post.id}">edit</button><button type="button" class="btn-delete" id="${post.id}" data-delete-item="${post.id}">x</button></p></div><p data-post-body="${post.id}">${post.body}</p></li>`;
            window.postQuantity = posts.length;
            return listWrap.insertAdjacentHTML("beforeend", list);
        });
        removeItems();
        editItems();
    }

    showPosts.addEventListener("click", (event) => {
        getPostList();
    });

    async function updatehData(title, body, id) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
                userId: id,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log("Update Success"));
    }

    function removeData(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        });
        console.log("Remove success");
    }

    createPostButton.addEventListener("click", (event) => {
        event.preventDefault();

        const id = postQuantity + 1;
        updatehData(createFieldTitle.value, createFieldBody.value, id);
        titleField.value = "";
        bodyField.value = "";
    });

    function removeItems() {
        const items = document.querySelectorAll("[data-delete-item]");

        items.forEach((item) => {
            item.addEventListener("click", async (event) => {
                const removeEl = event.currentTarget.dataset.deleteItem;
                await removeData(removeEl);
                document.querySelector(`#post-${removeEl}`).remove();
            });
        });
    }

    function editItems() {
        const items = document.querySelectorAll("[data-edit-item]");

        items.forEach((item) => {
            item.addEventListener("click", async (event) => {
                const id = event.currentTarget.dataset.editItem;
                const postTitle = document.querySelector(
                    `[data-post-title="${id}"]`
                ).textContent;
                const postBody = document.querySelector(
                    `[data-post-body="${id}"]`
                ).textContent;

                titleField.value = postTitle;
                bodyField.value = postBody;
            });
        });
    }
};

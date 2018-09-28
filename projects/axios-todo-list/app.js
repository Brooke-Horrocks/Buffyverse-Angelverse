const form = document.querySelector("#todoForm");
const todoListSection = document.querySelector("#todoListSection");
const url = "https://api.vschool.io/[Brooke_Horrocks]/todo/";
const getRequest = axios.get(url);

getRequest.then(function (response) {
    const todoObjects = response.data;
    todoObjects.forEach(function (todoObject) {
        createTodoItem(todoObject);
    });
})
.catch(function (err) {
    document.write(err);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoItem = {
        title: this.title.value,
        price: this.price.value,
        description: this.description.value,
        imgUrl: this.imgUrl.value
    }

    const postRequest = axios.post(url, todoItem);
    postRequest.then(function (response) {
        createTodoItem(response.data);
    })
    .catch(function (err) {
        alert(err);
    })

    form.reset();
});

function createTodoItem(todoItem) {
    const todoItemWrapper = document.createElement("div");
    todoItemWrapper.className = "todoItemWrapper";
    todoListSection.appendChild(todoItemWrapper);

    const h3 = document.createElement("h3");
    h3.innerText = todoItem.title;

    const label = document.createElement("label");
    label.className = "todoItemCheckboxLabel";
    label.innerText = "Completed:";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "todoItemCheckbox";
    checkBox.addEventListener("input", function() {
        label.classList.toggle("completed");
        todoItemWrapper.classList.toggle("completedTask");
    })

    const h4 = document.createElement("h4");
    h4.innerText = `$${todoItem.price}`;

    const p = document.createElement("p");
    p.innerText = `${todoItem.description}`;
    p.innerText = todoItem.description;

    const imgUrl = document.createElement("div");
    imgUrl.className = "imgUrl";
    imgUrl.style.backgroundImage = `url("${todoItem.imgUrl}")`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "X";
    deleteBtn.id = todoItem._id;
    deleteBtn.addEventListener("click", handleDelete);

    const children = [h3, h4, label, checkBox, p, imgUrl, deleteBtn];
    children.forEach(function (element) {
        todoItemWrapper.appendChild(element);
    })
}

function handleDelete() {
    this.parentNode.classList.add("deleted");

    setTimeout(() => {
        const deleteRequest = axios.delete(url + this.id);
        deleteRequest.then(response => {
        todoListSection.removeChild(this.parentNode);
        })
        .catch(function (err) {
            console.log(err);
        })
    }, 300);
}
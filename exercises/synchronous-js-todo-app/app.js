var addForm = document.querySelector("#addForm");
var todoList = document.querySelector("#todoList");

//Submit button event
addForm.addEventListener("submit", function(event){
    event.preventDefault();

    //Creating object with todo item information
    var todoItem = {
        title: this.title.value,
        description: this.description.value,
        price: this.price.value
    }

    //creating the container and adding it to the screen (see function below)
    createTodoItemContainer(todoItem);

    addForm.reset();
})

//
function createTodoItemContainer(todoItem){
    var todoWrapper = document.createElement("div");
    todoWrapper.classList.add("todoItemContainer");

    var h3 = document.createElement("h3");
    h3.innerText = todoItem.title;

    var label = document.createElement("label");
    label.innerText = "Completed?: ";

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("input", function(event){
        label.classList.toggle("completed");
    })
    
    var price = document.createElement("p");
    price.innerText = `Price: $${todoItem.price}`;

    var description = document.createElement("p");
    description.innerText = todoItem.description;

    var closeButton = document.createElement("button");
    closeButton.innerText = "x";
    closeButton.addEventListener("click", function(event){
        todoList.removeChild(this.parentNode);
    })

    var childrenEls = [h3, label, checkBox, price, description, closeButton];
    childrenEls.forEach(function(el){
        todoWrapper.appendChild(el);
    })
    todoList.appendChild(todoWrapper);
}
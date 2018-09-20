var form = document.querySelector("#todoForm");
var todoListSection = document.querySelector("#todoListSection");

var url = "https://api.vschool.io/[Brooke_Horrocks]/todo";
var getRequest = axios.get(url);

getRequest.then(function(response){
    var todoObjects = response.data;
    todoObjects.forEach(function(todoObject){
        var todoItem = {
            title: todoObject.title,
            price: todoObject.price,
            description: todoObject.description,
            id: todoObject._id
        }

        createTodoItem(todoItem);
    });
})
// .catch(function(err){
//     document.write("Information unavailable");
//     document.write(err);
// })

form.addEventListener("submit", function(event){
    event.preventDefault();

    var todoItem = {
        title: this.title.value,
        price: this.price.value,
        description: this.description.value,
    }

    // Do not display in this function. Only add to database
    // Using a Post request

    //Post with axios??? Make the post a separate function?
    axios.post(url, todoItem);
    //figure out then and catch

    form.reset();
})

function createTodoItem(todoItem){

    var todoItemWrapper = document.createElement("div");
    todoItemWrapper.className = "todoItemWrapper";
    todoListSection.appendChild(todoItemWrapper);
    
    var h3 = document.createElement("h3");
    h3.innerText = todoItem.title;

    var label = document.createElement("label");
    label.className = "todoItemCheckboxLabel";
    label.innerText = "Completed:";

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "todoItemCheckbox";
    checkBox.addEventListener("input", function(){
        label.classList.toggle("completed");
        todoItemWrapper.classList.toggle("completedTask");
    })

    var h4 = document.createElement("h4");
    h4.innerText = `Price: $${todoItem.price}`;

    var p = document.createElement("p");
    p.innerText = `Description: ${todoItem.description}`;

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", handleDelete());

    var children = [h3, h4, label, checkBox, p, deleteBtn];
    children.forEach(function(element){
        todoItemWrapper.appendChild(element);
    })
}

function handleDelete(){

    //use axios delete request
}
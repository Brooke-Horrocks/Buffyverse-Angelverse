var addForm = document.getElementById("add");
var subtractForm = document.getElementById("subtract");
var multiplyForm = document.getElementById("multiply");
var addSolution = document.getElementById("addSolution");
var subtractSolution = document.getElementById("subtractSolution");
var multiplySolution = document.getElementById("multiplySolution");

addForm.addEventListener("submit", function(event){
    event.preventDefault();
    addSolution.innerHTML += (parseInt(this.numberOneAdd.value, 10) + parseInt(this.numberTwoAdd.value, 10));
})

subtractForm.addEventListener("submit", function(event){
    event.preventDefault();
    subtractSolution.innerHTML += (parseInt(this.numberOneSubtract.value, 10) - parseInt(this.numberTwoSubtract.value, 10));
})

multiplyForm.addEventListener("submit", function(event){
    event.preventDefault();
    multiplySolution.innerHTML += (parseInt(this.numberOneMultiply.value, 10) * parseInt(this.numberTwoMultiply.value, 10));
})
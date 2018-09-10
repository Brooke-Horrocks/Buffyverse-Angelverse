var form = document.querySelector("form");
var numOfGoombas = document.getElementById("numberOfGoombas");
var priceOfGoombas = document.getElementById("priceOfGoombas");
var numOfBobombs = document.getElementById("numberOfBobombs");
var priceOfBobombs = document.getElementById("priceOfBobombs");
var numOfCheepcheeps = document.getElementById("numberOfCheepcheeps");
var priceOfCheepcheeps = document.getElementById("priceOfCheepcheeps");
var totalCost = document.getElementById("calculatedCost");

form.addEventListener("submit", function(event){
    var calcCost = 0;
    event.preventDefault();
    numOfGoombas.innerHTML += ` ${this.baddieGoomba.value}`;
    priceOfGoombas.innerHTML += ` ${parseInt(this.baddieGoomba.value) * 5} coins`;
    numOfBobombs.innerHTML += ` ${this.baddieBobomb.value}`;
    priceOfBobombs.innerHTML += ` ${parseInt(this.baddieBobomb.value) * 7} coins`;
    numOfCheepcheeps.innerHTML += ` ${this.baddieCheepcheep.value}`;
    priceOfCheepcheeps.innerHTML += ` ${parseInt(this.baddieCheepcheep.value) * 11} coins`;
    calcCost = (parseInt(this.baddieGoomba.value) * 5) + (parseInt(this.baddieBobomb.value) * 7) + (parseInt(this.baddieCheepcheep.value) * 11);
    totalCost.innerHTML += ` ${calcCost} coins`;
});
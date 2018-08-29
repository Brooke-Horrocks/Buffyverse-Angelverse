var shopper = {
    firstName: "Brooke",
    lastName: "Horrocks",
    budget: 100,
    isDoneShopping: false,
    groceryCart: ["Produce", "Dairy", "Toiletries", "Frozen", "Cleaners"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var printGroceryCart = function () {
    console.log("Groceries: ")
    for(let i = 0; i < shopper.groceryCart.length; i++) {
        console.log(shopper.groceryCart[i]);
    }
    console.log();
    shopper.isDoneShopping = true;
}

var printShoppingTrip = function() {
    console.log(shopper.fullName());
    console.log();
    printGroceryCart();
    if(shopper.isDoneShopping){
        console.log("Budget: " + shopper.budget);
    }
}

printShoppingTrip();
var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var firstName = this.firstName.value;
    var lastName = this.lastName.value;
    var age = this.age.value;
    var gender = this.querySelector("input[name=gender]:checked").value;
    var destination = this.destination.value;
    var isVegetarian = this.vegetarian.checked;
    var isKosher = this.kosher.checked;
    var isLactoseFree = this.lactoseFree.checked;

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nNeed Vegetarian?: " + isVegetarian + "\nNeed Kosher?: " + isKosher + "\nNeed Lactose Free?: " + isLactoseFree);
})
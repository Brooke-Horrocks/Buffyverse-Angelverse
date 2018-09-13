var form = document.querySelector("form");


form.addEventListener("submit", function(event){
    event.preventDefault();
    var firstName = this.firstName.value.toString();
    var lastName = this.lastName.value.toString();
    var age = this.age.value;
    var gender = this.querySelector("input[name=gender]:checked").value;
    var location = this.travelLocation.value;
    var dietOptions = this.querySelector("input[name=diet]:checked");
    var diet = [];
    if (this.vegan.checked) {
        diet.push(this.vegan.value);
    }
    if (this.gluten.checked) {
        diet.push(this.gluten.value);
    }
    if (this.paleo.checked) {
        diet.push(this.paleo.value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})
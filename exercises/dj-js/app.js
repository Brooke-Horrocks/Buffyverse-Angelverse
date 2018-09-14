var mySquare = document.getElementById("square");
var myBody = document.getElementById("main");

mySquare.addEventListener('mouseover', function() {
    mySquare.style.backgroundColor = "blue";
    mySquare.addEventListener("mouseleave", function() {
        mySquare.style.backgroundColor = "black";
    })
})

mySquare.addEventListener("mousedown", function() {
    mySquare.style.backgroundColor = "red";
    mySquare.addEventListener("mouseup", function() {
        mySquare.style.backgroundColor = "yellow";
    })
})

mySquare.addEventListener("dblclick", function() {
    mySquare.style.backgroundColor = "green";
})

myBody.addEventListener("wheel", function() {
    mySquare.style.backgroundColor = "orange"
})

myBody.addEventListener("keypress", function(e) {
    if(e.keyCode === 114) {
        mySquare.style.backgroundColor = "red";
    } else if(e.which === 112) {
        mySquare.style.backgroundColor = "purple"
    } else if(e.which === 121) {
        mySquare.style.backgroundColor = "yellow"
    } else if(e.which === 103) {
        mySquare.style.backgroundColor = "green"
    } else if(e.which === 98) {
        mySquare.style.backgroundColor = "blue"
    } else if(e.which === 111) {
        mySquare.style.backgroundColor = "orange"    
    }
})  
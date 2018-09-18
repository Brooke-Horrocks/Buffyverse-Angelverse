var countedUserClicks = localStorage.clickCount;

var displayedClicks = document.querySelector("#displayedClicks");

var startCountBtn = document.querySelector("#startCountBtn");
startCountBtn.addEventListener("click", function(){
    countedUserClicks++;
    localStorage.clickCount = countedUserClicks;
    displayedClicks.innerHTML = localStorage.getItem("clickCount");
});

var clearCountBtn = document.querySelector("#clearCountBtn");
clearCountBtn.addEventListener("click", function(){
    countedUserClicks = 0;
    localStorage.clickCount = countedUserClicks;
    displayedClicks.innerHTML = localStorage.getItem("clickCount");
});

displayedClicks.innerHTML = localStorage.getItem("clickCount");
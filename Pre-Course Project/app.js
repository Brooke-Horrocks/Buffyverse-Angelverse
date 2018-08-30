var dreamVacationList = ['Dream Vactions:']
var userDestination

var addDestination = function () {
    document.getElementById('vacationListOutput').innerHTML = ""
    if (document.getElementById('destination').value !== '') {
        userDestination = document.getElementById('destination').value
        dreamVacationList.push("I like " + userDestination)
        document.getElementById('destination').value = ''
    } else {
        document.getElementById('vacationListOutput').style.color = 'red'
        document.getElementById('vacationListOutput').innerHTML = "No destination entered, please enter destination and try again"
    }
}

var printDestinationList = function () {
    document.getElementById('vacationListOutput').innerHTML = ""
    document.getElementById('vacationListOutput').style.color = 'blue'
    for (var i = 0; i < dreamVacationList.length; i++) {
        document.getElementById('vacationListOutput').innerHTML += dreamVacationList[i] + "<br>"
    }
}

var clearDestinationList = function () {
    document.getElementById('vacationListOutput').innerHTML = ""
//    for (var i = dreamVacationList.length -1; i > 0; i--) {
//        dreamVacationList.splice(i, 1)
//    }
    dreamVacationList.splice(1, dreamVacationList.length -1)
}

document.getElementById('enterBtn').addEventListener('click', addDestination)
document.getElementById('doneBtn').addEventListener('click', printDestinationList)
document.getElementById('clearBtn').addEventListener('click', clearDestinationList)
var waterBottle = {
    color: "Teal",
    isFull: false,
    percentageFull: 25,
    writeWaterBottle: function() {
        if(!this.isFull){
            console.log(this.color + " water bottle that is not completely full, only about " + this.percentageFull + "%.");
        } else {
            console.log(this.color + " water bottle is full!")
        }
    }
}

var phone = {
    color: "Space Gray", 
    batteryFull: false,
    batteryPercentage: 29,
    writePhone: function() {
        if(!this.batteryFull){
            console.log(this.color + " iPhone that is not completely charged, only about " + this.batteryPercentage + "%.");
        } else {
            console.log(this.color + " iPhone is fully charged!");
        }
    }
}

var window = {
    borderColor: "White",
    isOpen: false,
    numOfPanes: 4,
    writeWindow: function() {
        if(!this.isOpen){
            console.log(this.borderColor + " bordered window with " + this.numOfPanes + " panes is not open.");
        } else {
            console.log(this.borderColor + " bordered window with " + this.numOfPanes + " panes is open!");
        }
    }
}

var watch = {
    color: "Black",
    isWorking: true,
    hourHand: 9,
    writeWatch: function() {
        if(!this.isWorking){
            console.log(this.color + " watch is working and the hour hand is at " + this.hourHand + ".");
        } else {
            console.log(this.color + " watch is not working and the hour hand is stuck at " + this.hourHand + ".");
        }
    }
}

waterBottle.writeWaterBottle();
phone.writePhone();
window.writeWindow();
watch.writeWatch();
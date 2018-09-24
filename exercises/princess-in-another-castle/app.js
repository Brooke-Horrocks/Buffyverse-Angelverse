class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "small";
        this.hasStar = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big";
        } else if(this.status === "Big"){
            this.status = "Small";
        } else {
            this.status = "Dead";
            this.gameActive = false;
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big";
        } else if(this.status === "Big"){
            this.status = "Powered Up";
        } else if(this.status === "Powered Up"){
            this.hasStar = true;
        }
    }
    addCoin(){
        this.totalCoins++;
    }
    print(){
        console.log(`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\nHas Star: ${this.hasStar}\n`);
    }
}

const luigi = new Player();
luigi.setName("Luigi");

const game = setInterval(()=>{
    const value = Math.floor(Math.random() * 3);

    if(value === 0){
        luigi.gotHit();
    } else if(value === 1){
        luigi.gotPowerup();
    } else{
        luigi.addCoin();
    }

    luigi.print();

    if(!luigi.gameActive){
        clearInterval(game);
    }
}, 750);
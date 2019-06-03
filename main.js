//amount of coins
var hessCoin = 0;
//value of coin
var value = 1;
//coins created per click
var amount = 0;
//money total
var money = 0;
//arrays for things purchased------------------
//gpu[0] = hamster wheel value will be amount
//amount of things
var gpua = [1,0,0,0,0,0,0];
var infa = [0,0,0,0,0,0,0];
//cost of things
var gpuc = [0,0,0,0,0,0,0];
var infc = [0,0,0,0,0,0,0];
//power of things (may not be needed)
var gpup = [1,10,100,1000,10000,100000,1000000];
var infp = [0,0,0,0,0,0,0];

//Makes new hesscoin
function makeCoin() {
    hessCoin += value * amount;
}
//calculates new price after purch 15%
function newPrice(price) {
    return price * 1.15;
}
var mine = document.getElementById("clicker").addEventListener("click", function() {
    makeCoin();
});



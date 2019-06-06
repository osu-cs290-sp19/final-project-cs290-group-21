//----------------------------WEBPAGE LOGIC-----------------------------
function save() {

}
function reset() {
    var hessCoin = 0;
    var value = 10;
    var perclick = 0;
    var money = 0;
    var gpua = [1,0,0,0,0,0,0];
    var infa = [0,0,0,0,0,0,0];
    var gpuc = [1,10,100,1000,10000,100000,1000000];
    var infc = [1,10,100,1000,10000,100000,1000000];
    var gpup = [1,10,100,1000,10000,100000,1000000];
    var infp = [1,10,100,1000,10000,100000,1000000];
}
var save = document.getElementById("save").addEventListener("click", function() {
    save();
});
var reset =ndocument.getElementById("reset").addEventListener("click", function() {
    reset();
});
//-----------------------------GAME LOGIC-------------------------------
//amount of coins
var hessCoin = 0;
//value of coin base is 10
var value = 10;
//coins created per click
var perclick = 0;
//money total
var money = 0;
//arrays for things purchased------------------
//gpu[0] = hamster wheel value will be amount
//amount of things
var gpua = [1,0,0,0,0,0,0];
var infa = [0,0,0,0,0,0,0];
//cost of things
var gpuc = [1,10,100,1000,10000,100000,1000000];
var infc = [1,10,100,1000,10000,100000,1000000];
//power of things (may not be needed)
var gpup = [1,10,100,1000,10000,100000,1000000];
var infp = [1,10,100,1000,10000,100000,1000000];

//Makes new hesscoin
function makeCoin() {
    hessCoin += value * perclick;
}
//calculates new price after purch 15%
function newPrice(price) {
    return price * 1.15;
}
//purchase a new gpu
    //type is array spot
function buyGPU(type) {
    gpua[type]++;
    perclick += gpup[type];
    money -= gpuc[type];
    gpuc[type] *= 1.15;
}
//purchase a new inf
    //type is array spot
function buyINF(type) {
    infa[type]++;
    value += infp[type];
    hessCoin -= infc[type];
    infc[type] *= 1.15;
}
var mine = document.getElementById("clicker").addEventListener("click", function() {
    makeCoin();
});
//--------------------------GPU-------------------------------
var buyGPU0 = document.getElementById("gpu0").addEventListener("click", function() {
    if (gpuc[0] <= hessCoin)
        buyGPU(0);
});
var buyGPU1 = document.getElementById("gpu1").addEventListener("click", function() {
    if (gpuc[1] <= hessCoin)
        buyGPU(1);
});
//--------------------------INF-------------------------------
var buyINF0 = document.getElementById("inf0").addEventListener("click", function() {
    if (infc[0] <= hessCoin)
        buyINF(0);
});

//Stats
function totalperclick () {
    var total = 0;
    for (var i = 0; i < 7; i++) {
        total += gpua[i] * gpup[i];
    }
    return total;
}
function totalprice () {
    var total = 0;
    for (var i = 0; i < 7; i++) {
        total += infa[i] * infp[i];
    }
    return total;
}

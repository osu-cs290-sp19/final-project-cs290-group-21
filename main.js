//----------------------------WEBPAGE LOGIC-----------------------------
function save() {

}

var save = document.getElementById("save").addEventListener("click", function () {
    save();
});
var reset = document.getElementById("reset").addEventListener("click", function () {
    confirm("Are you sure you want to reset?");
    reset();
});

var viewHighScores = document.getElementById("viewHighScores").addEventListener("click", function () {
    confirm("Are you sure? Your current game will be lost");
});
//-----------------------------GAME LOGIC-------------------------------
//amount of coins
var hessCoin = 0;
//value of coin base is 1
var value = 1;
//coins created per click
var perClick = 1;
//money total
var money = 0;
//arrays for things purchased------------------
//gpu[0] = hamster wheel value will be amount
//amount of things
var gpua = [1, 0, 0, 0, 0, 0, 0];
var infa = [0, 1, 0, 0, 0, 0, 0];
//cost of things
var gpuc = [1, 10, 100, 1000, 10000, 100000, 1000000];
var infc = [1, 10, 100, 1000, 10000, 100000, 1000000];
//power of things (may not be needed)
var gpup = [1, 10, 100, 1000, 10000, 100000, 1000000];
var infp = [1, 10, 100, 1000, 10000, 100000, 1000000];
//Time scale
var mTime = 17;

//creates random gibberish
function makeGibberish() {
    var hashes = [];
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 20; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
//Makes new hesscoin
function makeCoin() {
    hessCoin += perClick;
    money += value;
}

//calculates new price after purch 15%
function newPrice(price) {
    return price * 1.15;
}

//purchase a new gpu
//type is array spot
function buyGPU(type) {
    gpua[type]++;
    perClick += gpup[type];
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

var Game = {};
//Get HTML
window.onload = function () {
    var hessAmount = document.getElementById("hessCoins");
    var hessValue = document.getElementById("value");
    var hessMoney = document.getElementById("money");


    //Per Frame
    function update() {
        value = totalprice();
        money += value * hessCoin;

        hessAmount.innerHTML = hessCoin;
        hessValue.innerHTML = value;
        hessMoney.innerHTML = Math.trunc(money);

        setTimeout(update, mTime);
    }

    update();
}

Game.mine = document.getElementById("clicker").addEventListener("click", function () {
    var gibberish = document.getElementById("gibberish");
    gibberish.innerHTML = makeGibberish();
    makeCoin();
});
/*NEED HTML


//--------------------------GPU-------------------------------
Game.buyGPU0 = document.getElementById("gpu0").addEventListener("click", function() {
    if (gpuc[0] <= hessCoin)
        buyGPU(0);
});
Game.buyGPU1 = document.getElementById("gpu1").addEventListener("click", function() {
    if (gpuc[1] <= hessCoin)
        buyGPU(1);
});
//--------------------------INF-------------------------------
Game.buyINF0 = document.getElementById("inf0").addEventListener("click", function() {
    if (infc[0] <= hessCoin)
        buyINF(0);
});
*/

//Stats
function totalperClick() {
    var total = 0;
    for (var i = 0; i < 7; i++) {
        total += gpua[i] * gpup[i];
    }
    return total;
}

function totalprice() {
    var total = 0;
    for (var i = 0; i < 7; i++) {
        total += infa[i] * infp[i];
    }
    return total;
}

function reset() {
    hessCoin = 0;
    value = 1;
    perClick = 1;
    money = 0;
    gpua = [1, 0, 0, 0, 0, 0, 0];
    infa = [0, 0, 0, 0, 0, 0, 0];
    gpuc = [1, 10, 100, 1000, 10000, 100000, 1000000];
    infc = [1, 10, 100, 1000, 10000, 100000, 1000000];
}

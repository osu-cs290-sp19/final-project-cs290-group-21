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

var Data = {};
//amount of coins
Data.hessCoin = 0;
//value of coin base is 1
Data.value = 1;
//coins created per click
Data.perClick = 1;
//money total
Data.money = 0;
//arrays for things purchased------------------
//gpu[0] = hamster wheel value will be amount
//amount of things
<<<<<<< HEAD
Data.gpua = [1,0,0,0,0,0,0];
Data.infa = [0,1,0,0,0,0,0];
//cost of things
Data.gpuc = [1,10,100,1000,10000,100000,1000000];
Data.infc = [1,10,100,1000,10000,100000,1000000];
//power of things (may not be needed)
Data.gpup = [1,10,100,1000,10000,100000,1000000];
Data.infp = [1,10,100,1000,10000,100000,1000000];
=======
var gpua = [1, 0, 0, 0, 0, 0, 0];
var infa = [0, 1, 0, 0, 0, 0, 0];
//cost of things
var gpuc = [1, 10, 100, 1000, 10000, 100000, 1000000];
var infc = [1, 10, 100, 1000, 10000, 100000, 1000000];
//power of things (may not be needed)
var gpup = [1, 10, 100, 1000, 10000, 100000, 1000000];
var infp = [1, 10, 100, 1000, 10000, 100000, 1000000];
>>>>>>> 5398dc9fb17f472349c6ce9be0a2a723ebd16fc4
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
    Data.hessCoin += Data.perClick;
    Data.money += Data.value;
}

//calculates new price after purch 15%
function newPrice(price) {
    return Data.price * 1.15;
}

//purchase a new gpu
//type is array spot
function buyGPU(type) {
    Data.gpua[type]++;
    Data.perClick += Data.gpup[type];
    Data.money -= Data.gpuc[type];
    Data.gpuc[type] *= 1.15;
}

//purchase a new inf
//type is array spot
function buyINF(type) {
    Data.infa[type]++;
    Data.value += Data.infp[type];
    Data.hessCoin -= Data.infc[type];
    Data.infc[type] *= 1.15;
}
var Game = {};
//Get HTML
window.onload = function () {
    var hessAmount = document.getElementById("hessCoins");
    var hessValue = document.getElementById("value");
    var hessMoney = document.getElementById("money");


    //Per Frame
    function update() {
        Data.value = totalprice();
        Data.money = Data.value * Data.hessCoin;

        Data.hessAmount.innerHTML = Data.hessCoin;
        Data.hessValue.innerHTML = Data.value;
        Data.hessMoney.innerHTML = Math.trunc(Data.money);

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
        total += Data.gpua[i] * Data.gpup[i];
    }
    return total;
}

function totalprice() {
    var total = 0;
    for (var i = 0; i < 7; i++) {
        total += Data.infa[i] * Data.infp[i];
    }
    return total;
}

function reset() {
<<<<<<< HEAD
    Data.hessCoin = 0;
    Data.value = 1;
    Data.perClick = 1;
    Data.money = 0;
    Data.gpua = [1,0,0,0,0,0,0];
    Data.infa = [0,0,0,0,0,0,0];
    Data.gpuc = [1,10,100,1000,10000,100000,1000000];
    Data.infc = [1,10,100,1000,10000,100000,1000000];
=======
    hessCoin = 0;
    value = 1;
    perClick = 1;
    money = 0;
    gpua = [1, 0, 0, 0, 0, 0, 0];
    infa = [0, 0, 0, 0, 0, 0, 0];
    gpuc = [1, 10, 100, 1000, 10000, 100000, 1000000];
    infc = [1, 10, 100, 1000, 10000, 100000, 1000000];
>>>>>>> 5398dc9fb17f472349c6ce9be0a2a723ebd16fc4
}

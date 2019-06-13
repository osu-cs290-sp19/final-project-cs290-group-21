//----------------------------WEBPAGE LOGIC-----------------------------
function save() {

}
var save = document.getElementById("save").addEventListener("click", function() {
    save();
});
var reset = document.getElementById("reset").addEventListener("click", function() {
    confirm("Are you sure you want to reset?");
    reset();
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
Data.gpua = [0,0,0,0,0,0,0];
Data.infa = [0,0,0,0,0,0,0];
//cost of things
Data.gpuc = [1,10,100,1000,10000,100000,1000000];
Data.infc = [1,10,100,1000,10000,100000,1000000];
//power of things (may not be needed)
Data.gpup = [1,10,100,1000,10000,100000,1000000];
Data.infp = [1,10,100,1000,10000,100000,1000000];
//Time scale
var mTime = 17;


function makeGibberish() {
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
    Data.hessCoin += totalperClick(Data.perClick);
}
//purchase a new gpu
    //type is array spot
function buyGPU(type) {
    Data.gpua[type] += 1;
    Data.perClick += Data.gpup[type];
    Data.money -= Data.gpuc[type];
    Data.gpuc[type] *= 1.15;
}
//purchase a new inf
    //type is array spot
function buyINF(type) {
    Data.infa[type] += 1;
    Data.value += Data.infp[type];
    Data.money -= Data.infc[type];
    Data.infc[type] *= 1.15;
}
var Game = {};
//Get HTML
window.onload = function () {
    var hessAmount = document.getElementById("hessCoins");
    var hessValue = document.getElementById("value");
    var hessMoney = document.getElementById("money");

    var getGPU0c = document.getElementById("gpu0c");
    var getGPU0a = document.getElementById("gpu0a");
    var getGPU1c = document.getElementById("gpu1c");
    var getGPU1a = document.getElementById("gpu1a");
    var getGPU2c = document.getElementById("gpu2c");
    var getGPU2a = document.getElementById("gpu2a");
    var getGPU3c = document.getElementById("gpu3c");
    var getGPU3a = document.getElementById("gpu3a");
    var getGPU4c = document.getElementById("gpu4c");
    var getGPU4a = document.getElementById("gpu4a");
    var getGPU5c = document.getElementById("gpu5c");
    var getGPU5a = document.getElementById("gpu5a");
    var getGPU6c = document.getElementById("gpu6c");
    var getGPU6a = document.getElementById("gpu6a");

    var getINF0c = document.getElementById("inf0c");
    var getINF0a = document.getElementById("inf0a");
    var getINF1c = document.getElementById("inf1c");
    var getINF1a = document.getElementById("inf1a");
    var getINF2c = document.getElementById("inf2c");
    var getINF2a = document.getElementById("inf2a");
    var getINF3c = document.getElementById("inf3c");
    var getINF3a = document.getElementById("inf3a");
    var getINF4c = document.getElementById("inf4c");
    var getINF4a = document.getElementById("inf4a");
    var getINF5c = document.getElementById("inf5c");
    var getINF5a = document.getElementById("inf5a");
    var getINF6c = document.getElementById("inf6c");
    var getINF6a = document.getElementById("inf6a");

    //Per Frame
    function update() {
        Data.value = totalprice();
        Data.money = Data.value * Data.hessCoin;

        hessAmount.innerHTML = Data.hessCoin;
        hessValue.innerHTML = Data.value;
        hessMoney.innerHTML = Math.trunc(Data.money);

        getGPU0c.innerHTML = Math.trunc(Data.gpuc[0]);
        getGPU0a.innerHTML = Data.gpua[0];
        getGPU1c.innerHTML = Math.trunc(Data.gpuc[1]);
        getGPU1a.innerHTML = Data.gpua[1];
        getGPU2c.innerHTML = Math.trunc(Data.gpuc[2]);
        getGPU2a.innerHTML = Data.gpua[2];
        getGPU3c.innerHTML = Math.trunc(Data.gpuc[3]);
        getGPU3a.innerHTML = Data.gpua[3];
        getGPU4c.innerHTML = Math.trunc(Data.gpuc[4]);
        getGPU4a.innerHTML = Data.gpua[4];
        getGPU5c.innerHTML = Math.trunc(Data.gpuc[5]);
        getGPU5a.innerHTML = Data.gpua[5];
        getGPU6c.innerHTML = Math.trunc(Data.gpuc[6]);
        getGPU6a.innerHTML = Data.gpua[6];

        getINF0c.innerHTML = Math.trunc(Data.infc[0]);
        getINF0a.innerHTML = Data.infa[0];
        getINF1c.innerHTML = Math.trunc(Data.infc[1]);
        getINF1a.innerHTML = Data.infa[1];
        getINF2c.innerHTML = Math.trunc(Data.infc[2]);
        getINF2a.innerHTML = Data.infa[2];
        getINF3c.innerHTML = Math.trunc(Data.infc[3]);
        getINF3a.innerHTML = Data.infa[3];
        getINF4c.innerHTML = Math.trunc(Data.infc[4]);
        getINF4a.innerHTML = Data.infa[4];
        getINF5c.innerHTML = Math.trunc(Data.infc[5]);
        getINF5a.innerHTML = Data.infa[5];
        getINF6c.innerHTML = Math.trunc(Data.infc[6]);
        getINF6a.innerHTML = Data.infa[6];

        setTimeout(update, mTime);
    }
    update();
}

Game.mine = document.getElementById("clicker").addEventListener("click", function() {
    //var gibberish = document.getElementById("gibberish");
    //gibberish.innerHTML = makeGibberish();
    makeCoin();
});



//--------------------------GPU-------------------------------
Game.buyGPU0 = document.getElementById("gpu0").addEventListener("click", function() {
    if (Data.gpuc[0] <= money)
        buyGPU(0);
});
Game.buyGPU1 = document.getElementById("gpu1").addEventListener("click", function() {
    if (Data.gpuc[1] <= money)
        buyGPU(1);
});
//--------------------------INF-------------------------------
Game.buyINF0 = document.getElementById("inf0").addEventListener("click", function() {
    if (Data.infc[0] <= money)
        buyINF(0);
});


//Stats
function totalperClick () {
    var total = 1;
    for (var i = 0; i < 7; i++) {
        total += Data.gpua[i] * Data.gpup[i]; 
    }
    return total;
}
function totalprice () {
    var total = 1;
    for (var i = 0; i < 7; i++) {
        total += Data.infa[i] * Data.infp[i];
    }
    return total;
}
function reset() {
    Data.hessCoin = 0;
    Data.value = 1;
    Data.perClick = 1;
    Data.money = 0;
    Data.gpua = [1,0,0,0,0,0,0];
    Data.infa = [0,0,0,0,0,0,0];
    Data.gpuc = [1,10,100,1000,10000,100000,1000000];
    Data.infc = [1,10,100,1000,10000,100000,1000000];
}

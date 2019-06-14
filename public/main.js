//----------------------------WEBPAGE LOGIC-----------------------------

var saveButton = document.getElementById("save").addEventListener("click", function() {
    save();
});
var resetButton = document.getElementById("reset").addEventListener("click", function() {
    if(confirm("Are you sure you want to reset?")){
        reset();
    }
    
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
Data.gpuc = [1,5,50,150,300,1000,5000];
Data.infc = [1,5,50,150,300,1000,5000];
//power of things (may not be needed)
Data.gpup = [1,5,50,150,300,1000,5000];
Data.infp = [1,5,50,150,300,1000,5000];

var result = '';
//Time scale
var mTime = 17;


function makeGibberish(result) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 31; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result += ' ';
    if (result.length > 512)
        return result.slice(32);
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
    Data.hessCoin -= Data.gpuc[type];
    Data.gpuc[type] *= 2;
}
//purchase a new inf
    //type is array spot
function buyINF(type) {
    Data.infa[type] += 1;
    Data.value += Data.infp[type];
    Data.hessCoin -= Data.infc[type];
    Data.infc[type] *= 2;
}
var Game = {};

//Get HTML
window.onload = function () {
    Game = localStorage.getItem("data");
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


    var getInfTotal = document.getElementById("infTotal");
    var getgpuTotal = document.getElementById("gpuTotal");
    
    
    //Per Frame
    function update() {
        Data.value += totalprice() * (17/1000);
        Data.money = Data.value * Data.hessCoin;

        //may cause math problems
        hessAmount.innerHTML = Math.trunc(Data.hessCoin);
        hessValue.innerHTML = Math.trunc(Data.value);
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



        getInfTotal.innerHTML = totalprice();
        getgpuTotal.innerHTML = totalperClick();
        
        setTimeout(update, mTime);
    }
    update();
}

Game.mine = document.getElementById("clicker").addEventListener("click", function() {
    var gibberish = document.getElementById("hash");
    result = makeGibberish(result);
    gibberish.innerHTML = result;
    makeCoin();
});



//--------------------------GPU-------------------------------
Game.buyGPU0 = document.getElementById("gpu0").addEventListener("click", function() {
    if (Data.gpuc[0] <= Data.hessCoin)
        buyGPU(0);
});
Game.buyGPU1 = document.getElementById("gpu1").addEventListener("click", function() {
    if (Data.gpuc[1] <= Data.hessCoin)
        buyGPU(1);
});
Game.buyGPU2 = document.getElementById("gpu2").addEventListener("click", function() {
    if (Data.gpuc[2] <= Data.hessCoin)
        buyGPU(2);
});
Game.buyGPU3 = document.getElementById("gpu3").addEventListener("click", function() {
    if (Data.gpuc[3] <= Data.hessCoin)
        buyGPU(3);
});
Game.buyGPU4 = document.getElementById("gpu4").addEventListener("click", function() {
    if (Data.gpuc[4] <= Data.hessCoin)
        buyGPU(4);
});
Game.buyGPU5 = document.getElementById("gpu5").addEventListener("click", function() {
    if (Data.gpuc[5] <= Data.hessCoin)
        buyGPU(5);
});
Game.buyGPU6 = document.getElementById("gpu6").addEventListener("click", function() {
    if (Data.gpuc[6] <= Data.hessCoin)
        buyGPU(6);
});
//--------------------------INF-------------------------------
Game.buyINF0 = document.getElementById("inf0").addEventListener("click", function() {
    if (Data.infc[0] <= Data.hessCoin)
        buyINF(0);
});
Game.buyINF1 = document.getElementById("inf1").addEventListener("click", function() {
    if (Data.infc[1] <= Data.hessCoin)
        buyINF(1);
});
Game.buyINF2 = document.getElementById("inf2").addEventListener("click", function() {
    if (Data.infc[2] <= Data.hessCoin)
        buyINF(2);
});
Game.buyINF3 = document.getElementById("inf3").addEventListener("click", function() {
    if (Data.infc[3] <= Data.hessCoin)
        buyINF(3);
});
Game.buyINF4 = document.getElementById("inf4").addEventListener("click", function() {
    if (Data.infc[4] <= Data.hessCoin)
        buyINF(4);
});
Game.buyINF5 = document.getElementById("inf5").addEventListener("click", function() {
    if (Data.infc[5] <= Data.hessCoin)
        buyINF(5);
});
Game.buyINF6 = document.getElementById("inf6").addEventListener("click", function() {
    if (Data.infc[6] <= Data.hessCoin)
        buyINF(6);
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
    var total = 0;
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
    Data.gpua = [0,0,0,0,0,0,0];
    Data.infa = [0,0,0,0,0,0,0];
    Data.gpuc = [1,5,50,150,300,1000,5000];
    Data.infc = [1,5,50,150,300,1000,5000];
    result = '';
    document.getElementById("hash").innerHTML = '';
}
function save() {
    var myJSON = JSON.stringify(Data);
    localStorage.setItem("data", myJSON);
    const username = prompt("Enter your name to save your score.");
}

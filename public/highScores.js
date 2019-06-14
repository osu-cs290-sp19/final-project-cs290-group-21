
function createHighScoreTable(playerName, playerScore){
    var context = {
        name: playerName,
        score: playerScore
    };

    return Handlebars.templates.scorePage(context);
}

var htmlforshit = createHighScoreTable("david", 600)
var scoreTable = document.getElementById("hs-table");
scoreTable.insertAdjacentHTML('beforeend', htmlforshit);

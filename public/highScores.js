function createHighScoreTable(playerName, playerScore){
    var context = {
        name: playerName,
        score: playerScore
    };
    return Handlebars.templates.highScoreTable(context);

}
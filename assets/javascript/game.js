// jQuery js for Crystal Game
// start with onready
$("document").ready(function() {
    
    // start variables
    // game points
    var winScore = 0;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    // crystal points
    var redPoint = 0;
    var bluePoint = 0
    var orangePoint = 0;
    var greenPoint = 0;
    
    // random number generator
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

    // clear functions
    window.onload = function() {
        clearScore();
        newGame();
    };

    function clearScore() {
        wins = 0;
        losses = 0;
        $("#wins").text(wins);
        $("#losses").text(losses);
    };

    // function to grab values for game start
    function newGame() {
        winScore = getRndInteger(19, 120);
        redPoint = getRndInteger(1, 12);
        bluePoint = getRndInteger(1, 12);
        orangePoint = getRndInteger(1, 12);
        greenPoint = getRndInteger(1, 12);
        counter = 0;
        $("#targetScore").text(winScore);
        $("#counter").text(counter);
        $("#wins").text(wins);
        $("#losses").text(losses);
    };

    // if/else function to determine win states
    function gameOver() {
        // loss 
        if (counter > winScore) {
            alert("You Lost! Try Again.");
            losses++;
            newGame();
        }
        // win
        else if (counter == winScore) {
            alert("You Win!");
            wins++;
            newGame();
        }
        else {
            return false;
        }
    };

    // on click functions
    // red crystal
    $("#red").on("click", function() {
        counter += redPoint;
        $("#counter").text(counter);
        gameOver();
    });

    // blue crystal
    $("#blue").on("click", function() {
        counter += bluePoint;
        $("#counter").text(counter);
        gameOver();
    });

    // orange crystal
    $("#orange").on("click", function() {
        counter += orangePoint;
        $("#counter").text(counter);
        gameOver();
    });

    // green crystal
    $("#green").on("click", function() {
        counter += greenPoint;
        $("#counter").text(counter);
        gameOver();
    });

    // new number button
    $("#newNumber").on("click", function() {
        newGame();
    });

    // reset points button
    $("#resetPoints").on("click", function() {
        clearScore();
    })
});
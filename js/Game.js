﻿
/* 
///////////////////////// AIDE \\\\\\\\\\\\\\\\\\\\\\\\\\\
Pour creer un objet et l'instancier en Javascript avec attributs et méthodes :

function UneClasse(paramA, paramB){
    this.attributA = paramA,
    this.attributB = paramB,
    this.getA = function(){
        return this.attributA;
    }
}
 
var instance1 = new UneClasse();
*/
function Game() {
    this.score = 0;
    this.numLifes = 0;
    this.width = 600;
    this.height = 400;
    this.currentScreen = null;


    this.setScreen = function (gameScreen) {
        this.currentScreen = gameScreen;
    };

    this.update = function update() {
        this.currentScreen.prototype.update();
    };

    this.render = function render() {
        this.currentScreen.prototype.render();
    }

    this.start = function start() {
        var gameCanvas = document.createElement("canvas");
        gameCanvas.setAttribute("id", "gameCanvas");
        document.getElementById("content").appendChild(gameCanvas);

        LevelScreen.prototype.initialize();
        this.setScreen(LevelScreen);
        console.log("End of initialisation...")
    }
}

function startTest() {
    game = new Game();
    game.start();
    var interval = setInterval(function () {
        game.update();
        game.render();
    }, 1000 / 60);
}

window.onload = startTest();
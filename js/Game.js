
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
        this.currentScreen.update();
    };

    this.render = function render() {
        this.currentScreen.render();
    }

    this.start = function start() {
        initialisation();
        /* Start game  ! ( set interval )*/
    }
}



function initialisation() {
    var gameCanvas = document.createElement("canvas");
    gameCanvas.setAttribute("id", "gameCanvas");
    document.getElementById("content").appendChild(gameCanvas);
    console.log("End of initialisation...")
}

function startTest() {
    
    var game = new Game();
    game.start();

}

window.onload = startTest();
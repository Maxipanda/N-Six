
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

var game;
var assetManager;
var input;

function Game() {
    this.score = 0;
    this.numLifes = 0;
    this.width = 640;
    this.height = 480;
    this.currentScreen = null;
    this.graphics;


    this.setScreen = function (gameScreen) {
        this.currentScreen = gameScreen;
    };

    this.update = function update() {
        this.currentScreen.prototype.update();
    };

    this.render = function render() {
        this.currentScreen.prototype.render(this.graphics);
    };

    this.start = function start() {
        var gameCanvas = document.createElement("canvas");
        gameCanvas.setAttribute("id", "gameCanvas");
        gameCanvas.setAttribute("width", this.width);
        gameCanvas.setAttribute("height", this.height);
        document.getElementById("content").appendChild(gameCanvas);

        LevelScreen.prototype.initialize();
        this.setScreen(LevelScreen);
        this.graphics = gameCanvas.getContext("2d");
        console.log("End of initialisation...")
    };
}

function loadAssets(){
	
	input = new Input.getInstance();
	assetManager = new AssetManager.getInstance();
	assetManager.init(startTest);
}

function startTest() {
    game = new Game();
    game.start();
    var interval = setInterval(function () {
        game.update();
        game.render();
    }, 1000 / 60);
}

window.onload = loadAssets();
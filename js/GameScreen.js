// Game Screen
var GameScreen = {
	initialize : function() {
		
	},
	update : function() {
		
	},
	render : function(graphics) {
		// graphics de type HTMLCanvas2DContext
		
	},
	dispose : function() {
		
	}
};

// Load Screen
var LoadScreen = function() {
	
};

LoadScreen.prototype = Object.create(GameScreen);

LoadScreen.prototype.initialize = function() {
	console.log('LoadScreen initialize');
};

LoadScreen.prototype.update = function() {

};

LoadScreen.prototype.render = function() {

};

LoadScreen.prototype.dispose = function() {
	console.log('LoadScreen dispose');
};

// Title Screen
var TitleScreen = function() {
	
};

TitleScreen.prototype = Object.create(GameScreen);

TitleScreen.prototype.initialize = function() {
	console.log('TitleScreen initialize');
};

TitleScreen.prototype.update = function() {

};

TitleScreen.prototype.render = function() {

};

TitleScreen.prototype.dispose = function() {
	console.log('TitleScreen dispose');
};

// Choice Screen
var ChoiceScreen = function() {
	
};

ChoiceScreen.prototype = Object.create(GameScreen);

ChoiceScreen.prototype.initialize = function() {
	console.log('ChoiceScreen initialize');
};

ChoiceScreen.prototype.update = function() {
	
};

ChoiceScreen.prototype.render = function() {
	
};

ChoiceScreen.prototype.dispose = function() {
	console.log('ChoiceScreen dispose');
};

// Level Screen
var LevelScreen = function() {

	this.graphics;
	this.infiniteBackgrounds;
};

LevelScreen.prototype = Object.create(GameScreen);

LevelScreen.prototype.initialize = function() {

	console.log('LevelScreen initialize');
	
	this.infiniteBackgrounds = [];
	
	// INITIALIZE GRAPHICS
	var canvas = document.getElementById("gameCanvas");
	this.graphics = canvas.getContext("2d");
	
	// LOAD BACKGROUND IMAGES - REPLACE WITH ASSET-MANAGER METHODS
	var img1 = new Image();
	img1.src = "images/Background01.png";
	var img2 = new Image();
	img2.src = "images/Background02.png";

	var bg1 = new InfiniteBackground(0,0,0,0,0,0, img1, canvas.width, canvas.height, 4);
	var bg2 = new InfiniteBackground(0,0,0,0,0,0, img2, canvas.width, canvas.height, 2);
	
	bg1.initialize();
	bg2.initialize();
	
	// TO BE REPLACED
	this.infiniteBackgrounds.push(bg1);
	this.infiniteBackgrounds.push(bg2);
	
};

LevelScreen.prototype.update = function () {

    this.infiniteBackgrounds[0].update();
	this.infiniteBackgrounds[1].update();
	
};

LevelScreen.prototype.render = function () {

    this.infiniteBackgrounds[0].render(this.graphics);
	this.infiniteBackgrounds[1].render(this.graphics);
};

LevelScreen.prototype.dispose = function() {
	console.log('LevelScreen dispose');
};

LevelScreen.prototype.addEntity = function(entity) {
	// entity de type GameEntity
};

// Game Over Screen
var GameOverScreen = function() {
	
};

GameOverScreen.prototype = Object.create(GameScreen);

GameOverScreen.prototype.initialize = function() {
	console.log('GameOverScreen initialize');
};

GameOverScreen.prototype.update = function() {
	
};

GameOverScreen.prototype.render = function() {
	
};

GameOverScreen.prototype.dispose = function() {
	console.log('GameOverScreen dispose');
};

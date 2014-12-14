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
	
};

// Title Screen
var TitleScreen = function() {
	
};

TitleScreen.prototype = Object.create(GameScreen);

TitleScreen.prototype.initialize = function() {
	
};

TitleScreen.prototype.update = function() {
	
};

TitleScreen.prototype.render = function() {
	
};

TitleScreen.prototype.dispose = function() {
	
};

// Choice Screen
var ChoiceScreen = function() {
	
};

ChoiceScreen.prototype = Object.create(GameScreen);

ChoiceScreen.prototype.initialize = function() {
	
};

ChoiceScreen.prototype.update = function() {
	
};

ChoiceScreen.prototype.render = function() {
	
};

ChoiceScreen.prototype.dispose = function() {
	
};

// Level Screen
var LevelScreen = function() {
	
};

LevelScreen.prototype = Object.create(GameScreen);

LevelScreen.prototype.initialize = function() {
	
};

LevelScreen.prototype.update = function() {
	
};

LevelScreen.prototype.render = function() {
	
};

LevelScreen.prototype.dispose = function() {
	
};

LevelScreen.prototype.addEntity = function(entity) {
	// entity de type GameEntity
};

// Game Over Screen
var GameOverScreen = function() {
	
};

GameOverScreen.prototype = Object.create(GameScreen);

GameOverScreen.prototype.initialize = function() {
	
};

GameOverScreen.prototype.update = function() {
	
};

GameOverScreen.prototype.render = function() {
	
};

GameOverScreen.prototype.dispose = function() {
	
};

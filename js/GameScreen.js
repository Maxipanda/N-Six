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

    this.infiniteBackgrounds;
    this.enemies;
    this.player;
    this.bulletsPlayer;
    this.bulletsEnemies;
	this.assets;
};

LevelScreen.prototype = Object.create(GameScreen);

LevelScreen.prototype.initialize = function() {

	console.log('LevelScreen initialize');
	
	this.infiniteBackgrounds = [];
	this.enemies = [];
	this.bulletsPlayer = [];
	this.bulletsEnemies= [];
	
	var bg1 = new InfiniteBackground(0,0,0,0,0,0, assetManager.getImage("img-bg1"), 4);
	var bg2 = new InfiniteBackground(0,0,0,0,0,0, assetManager.getImage("img-bg2"), 2);
	
	bg1.initialize();
	bg2.initialize();
	
	// TO BE REPLACED
	this.infiniteBackgrounds.push(bg1);
	this.infiniteBackgrounds.push(bg2);


	var colGroups = [];
	colGroups.push("g1");
	var colFilter = [];
	colFilter.push("gf1");
	var rect1 = new Rectangle(0, 0, 10, 10);
	var rect2 = new Rectangle(11, 11, 20, 20);
	var player = new Player(0, 0, 0, colGroups, colFilter, rect1, 1);
	this.player = player;
	
	initEnemies(50, 10000, 480, this.enemies);

};

LevelScreen.prototype.update = function () {

    this.infiniteBackgrounds[0].update();
    this.infiniteBackgrounds[1].update();
    this.player.update();
    for (i = 0; i < this.enemies.length; i++) {
        this.enemies[i].update();   
    }


    ///////////////////////////TEST COLLISIONS/////////////////////////
    // Test des colisions ! $
    // Pour tout les enemies
    for (i = 0; i < this.enemies.length; i++) {
        for (j = 0; j < this.bulletsPlayer; j++) {
            //on regarde si il se prend un boulette du joueur
            if (this.bulletsPlayer[j].hitTest(this.enemies[i])) {
               // console.log("KABOOOM");
            }
        }
        //On regarde si il collide avec le joueur
        if (this.player.hitTest(this.enemies[i])) {
           // console.log("AARRRRGHHH!");
            // On perd une vie;
        }
    }
    // Pour toute les boulettes des enemies
    for (i = 0; i < this.bulletsEnemies.length; i++) {
        for (j = 0; j < this.bulletsPlayer.length; j++) {
            if (this.bulletsPlayer[j].hitTest(this.bulletsEnemies[i])) {
               // console.log("Bullets Collide !");
            }
        }
        if (this.player.hitTest(this.bulletsEnemies[i])) {
            //console.log("Bullets Enemies collide player  !");
        }
    }
    //////////////////////////////////////////////////////////////////////////
};

LevelScreen.prototype.render = function (graphics) {

    this.infiniteBackgrounds[0].render(graphics);
    this.infiniteBackgrounds[1].render(graphics);
    this.player.render(graphics);
    for (i = 0; i < this.enemies.length; i++)
    {
        this.enemies[i].render(graphics);
    }
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


function initEnemies(nb, width, height,list) {
	
    var rect1 = new Rectangle(-10, -10, 10, 10);
	for(i = 0; i < nb; i++) {
	    enemy = new Enemy(Math.floor(Math.random() * width + 1), Math.floor(Math.random() * height + 1), 0, rect1);
	    list.push(enemy);
	}
}

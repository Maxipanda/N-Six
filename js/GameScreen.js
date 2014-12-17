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




var bulletsPlayer;
// Level Screen
var LevelScreen = function() {

    this.infiniteBackgrounds;
    this.enemies;
    this.player;
    //bulletsPlayer;
    this.bulletsEnemies;
	this.assets;
	this.animations;
};

LevelScreen.prototype = Object.create(GameScreen);

LevelScreen.prototype.initialize = function() {

	console.log('LevelScreen initialize');
	
	this.infiniteBackgrounds = [];
	this.enemies = [];
	bulletsPlayer = [];
	this.bulletsEnemies= [];
	this.animations= [];
	
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
	var rect1 = new Rectangle(0, 0, 48, 32);
	var rect2 = new Rectangle(11, 11, 20, 20);
	var player = new Player(0, 0, 0, colGroups, colFilter, rect1, 1);
	this.player = player;
	initEnemies(50, 5000, 480, this.enemies);
	//this.enemies.push(enemy);

};

LevelScreen.prototype.update = function () {

    this.infiniteBackgrounds[0].update();
    this.infiniteBackgrounds[1].update();
    this.player.update();
    for (i = 0; i < this.enemies.length; i++) {
        this.enemies[i].update();
    }
    for (i = 0; i < bulletsPlayer.length; i++) {
        bulletsPlayer[i].update();
    }
    
    ///////////////////////////TEST COLLISIONS/////////////////////////
    // Test des colisions ! $
    // Pour tout les enemies
    for (i = 0; i < this.enemies.length; i++) {
        for (j = 0; j < bulletsPlayer; j++) {
            //on regarde si il se prend un boulette du joueur
            if (bulletsPlayer[j].hitTest(this.enemies[i])) {
				console.log("bullet");
               //supressFrom(this.enemies,this.enemies[i]);
            }
        }
        //On regarde si il collide avec le joueur
        if (this.player.hitTest(this.enemies[i])) {
            supressFrom(this.enemies,this.enemies[i]);
            // On perd une vie;
        }
    }
    // Pour toute les boulettes des enemies
    for (i = 0; i < this.bulletsEnemies.length; i++) {

        for (j = 0; j < bulletsPlayer.length; j++) {
            if (bulletsPlayer[j].hitTest(this.bulletsEnemies[i])) {
               console.log("Bullets Collide !");

            }
        }
        if (this.player.hitTest(this.bulletsEnemies[i])) {
            //console.log("Bullets Enemies collide player  !");
        }
    }
    
    //////////////////////////////////////////////////////////////////////////

    ////////////////////////TEST FIN DE VIE DES BOULETTES ET ENEMIS /////////
    for (i = 0; i < this.enemies.length; i++) {
        if (this.enemies[i].x < -50) {

        }
    }

    for (i = 0; i < bulletsPlayer.length; i++) {
        if (bulletsPlayer[i].y < -50 || bulletsPlayer[i].y > 500 || bulletsPlayer[i].x > 700) {

        }
    }

    for (i = 0; i < this.bulletsEnemies.length; i++) {
        if (this.bulletsEnemies[i].x < -50 || this.bulletsEnemies[i].y > 500 || this.bulletsEnemies[i].x > 700) {

        }
    }
	
	/*
	for(i = 0; i < this.animations.length; i++)
	{
		this.animations[i].update();
	}*/

}

LevelScreen.prototype.dispose = function() {
    console.log('LevelScreen dispose');

    };

LevelScreen.prototype.render = function (graphics) {

    this.infiniteBackgrounds[0].render(graphics);
    this.infiniteBackgrounds[1].render(graphics);
    this.player.render(graphics);
    for (i = 0; i < this.enemies.length; i++)
    {
        this.enemies[i].render(graphics);
    }
	for(i = 0; i < this.animations.length; i++)
	{
		this.animations[i].render(graphics);
	}
    for (i = 0; i < bulletsPlayer.length; i++)
    {
        bulletsPlayer[i].render(graphics);
    }
    
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
	
    
	for(i = 0; i < nb; i++) {
		var x = Math.floor(Math.random() * width + 1);
		var y = Math.floor(Math.random() * height + 1);
		var rect1 = new Rectangle(x, y, x+32, y+32);
	    enemy = new Enemy(x, y, 0, rect1);
	    list.push(enemy);
	}
}


function supressFrom(list, entity)
{
	var index = list.indexOf(entity);
	if (index > -1) {
		list.splice(index, 1);
	}
}


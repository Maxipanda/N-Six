/*
* You need to include Rectangle.js before this script or uncomment the code below
*/
/*
function Rectangle(a1, b1, a2, b2){
	
	this.x1 = a1;
	this.y1 = b1;
	this.x2 = a2;
	this.y2 = b2;
	
	this.intersect = function(rect){
		
		var intersectHorizontally = false;
		var intersectVertically = false;
		
		if(this.x1 < rect.x1){
			if(rect.x1 <= this.x2)
				intersectHorizontally = true;
		}else{
			if(this.x1 <= rect.x2)
				intersectHorizontally = true;
		}
				
		if(this.y1 < rect.y1){
			if(rect.y1 <= this.y2)
				intersectVertically = true;
		}else{
			if(this.y1 <= rect.y2)
				intersectVertically = true;
		}
	
		if(intersectVertically && intersectHorizontally)
			return true;
		return false;	
	};
	
	this.moveTo = function(a, b){
	
		var width = this.x2 - this.x1;
		var height = this.y2 - this.y1;
		
		this.x1 = a;
		this.y1 = b;
		this.x2 = a + width;
		this.y2 = b + height;
	};
	
}
*/

/**
* @class GameEntity
*
* @param x Coordinate x
* @param y Coordinate y
* @param z Coordinate z
* @param collisionGroups List of the different collision groups of the entity
* @param collisionFilters List of the different collision filters of the entity
* @param hitBox Rectangle representing the physical boundaries of the entity
*
*/
function GameEntity(x,y,z,collisionGroups,collisionFilters, hitBox){
    this.x = x;
    this.y = y;
    this.z = z;
    this.collisionGroups = collisionGroups;
    this.collisionFilters = collisionFilters;
    this.hitBox = hitBox;
	
    this.canCollideWith = function(e){
		if(e == undefined){alert("Function canCollideWith undefined e (parameter GameEntity)");}
		if(collisionGroups == undefined){alert("Function canCollideWith undefined collisionGroups");}
		if(collisionFilters == undefined){alert("Function canCollideWith undefined collisionFilters");}
        
		for(filter in this.collisionFilters){
			for(group in e.collisionGroups){
				if(this.collisionFilters[filter] == e.collisionGroups[group]){
					return false;
				}
			}
		}
		for(filter in e.collisionFilters){
			for(group in this.collisionGroups){
				if(e.collisionFilters[filter] == this.collisionGroups[group]){
					return false;
				}
			}
		}
		return true;
    }
	
    this.update = function(){
		this.checkCoordinates("Function update undefined coordinates");
    }
	
    this.render = function(g){
		this.checkCoordinates("Function render undefined coordinates");
        if(g == undefined){alert("Function render undefined parameter g (HTMLCanvas2DContext)");}
    }
	
    this.hitTest = function(entity){
		if(entity == undefined){alert("Function hitTest undefined parameter entity (GameEntity)");}
		if(this.hitBox == undefined){alert("Function hitTest undefined hitBox");}
		if(entity.hitBox == undefined){alert("Function hitTest undefined parameter hitBox");}
        if(! this.canCollideWith(entity)){
			return false;
		}
		return this.hitBox.intersect(entity.hitBox);
    }
	
	this.checkCoordinates = function(messg){
		if(x == undefined || y == undefined || z == undefined){alert(messg);}
	}
	
}

/**
* @class Player
*
* @param weaponId
*/
var Player = function(x,y,z,collisionGroups,collisionFilters, hitBox, weaponId) {
	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox); 
    this.weaponId = weaponId;
	
	this.update = function(){
		this.checkCoordinates("Function update, undefined coordinates");
		/*Check pressed touched*/
    }
	
	//TODO: Remove when AssetManager is implemented
	if(typeof AssetManager == 'undefined'){
		this.image= new Image();
		this.image.src = "./images/Spaceship01.png";
	}
	
	this.render = function(g){
		this.checkCoordinates("Function render undefined coordinates");
        if(g == undefined){alert("Function render undefined parameter g (HTMLCanvas2DContext)");}
		if(typeof AssetManager == 'undefined')
		{
			g.drawImage(this.image, this.x, this.y);
		}
		else
		{
			g.drawImage(AssetManager.getInstance().getImage("player"), this.x, this.y);
		}
    }
	
	this.shoot = function(){
    }
};

/**
* @class Enemy
*
*
*/
var Enemy = function(x,y,z,collisionGroups,collisionFilters, hitBox) {

	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox);
	
	this.update = function(){
		this.checkCoordinates("Function update, undefined coordinates");
		
		this.x += -2;
		
		if(this.y > 0 && this.y <= 368 )
		{
			this.y += Math.floor((Math.random() * 5) - 2);
			if(this.y <0)
				this.y = 0;
		}
		
    }
	
	//TODO: Remove when AssetManager is implemented
	if(typeof AssetManager == 'undefined'){
		this.image= new Image();
		this.image.src = "./images/Enemy01.png";
	}
	
	this.render = function(g){
		this.checkCoordinates("Function render undefined coordinates");
        if(g == undefined){alert("Function render undefined parameter g (HTMLCanvas2DContext)");}
		if(typeof AssetManager == 'undefined')
		{
			g.drawImage(this.image, this.x, this.y);
		}
		else
		{
			g.drawImage(AssetManager.getInstance().getImage("enemy"), this.x, this.y);
		}
    }
	
	this.shoot = function(){
    }
};



/**
* @class Bonus
*
*
*/
var Bonus = function(x,y,z,collisionGroups,collisionFilters, hitBox) {
	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox);
	
	this.update = function(){
		this.checkCoordinates("Function update, undefined coordinates");
    }
	
	this.render = function(g){
		this.checkCoordinates("Function render undefined coordinates");
        if(g == undefined){alert("Function render undefined parameter g (HTMLCanvas2DContext)");}
		//g.drawImage(AssetManager.getInstance().getImage("bonus"), this.x, this.y);
    }
	
};


/**
* @class InfiniteBackground
*
* @param image
* @param virtualDepth
* @param offsetX
* @param offsetY
*/

var InfiniteBackground = function(x,y,z,collisionGroups,collisionFilters, hitBox, image, canvasWidth, canvasHeight, speed) {

	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox);
	
    this.image = image;
	this.position = 0;
	this.speed = speed;
	
	this.CANVAS_WIDTH = canvasWidth;
	this.CANVAS_HEIGHT = canvasHeight;
	this.BG_WIDTH;
	this.BG_HEIGHT;
	
	this.initialize = function(){
		
		this.BG_WIDTH = this.image.width;
		this.BG_HEIGHT = this.image.height;
	}
	
	this.update = function(){
		
		// Update background position
		
		this.position+=this.speed;
		if(this.position >= this.BG_WIDTH)
			this.position = 0;
	}
	
	this.render = function(graphics){
		
		// Display background
		
		graphics.drawImage(this.image, this.position,0, this.BG_WIDTH - this.position, this.BG_HEIGHT, 0, 0, this.BG_WIDTH - this.position, this.BG_HEIGHT);
		graphics.drawImage(this.image, 0, 0, this.BG_WIDTH, this.BG_HEIGHT, this.BG_WIDTH - this.position, 0, this.BG_WIDTH, this.BG_HEIGHT);
		graphics.drawImage(this.image, this.position,0, this.BG_WIDTH - this.position, this.BG_HEIGHT, 0, this.BG_HEIGHT, this.BG_WIDTH - this.position, this.BG_HEIGHT);
		graphics.drawImage(this.image, 0, 0, this.BG_WIDTH, this.BG_HEIGHT, this.BG_WIDTH - this.position, this.BG_HEIGHT, this.BG_WIDTH, this.BG_HEIGHT);
		
		if(this.position > 2*(this.BG_WIDTH)-(this.CANVAS_WIDTH)){
		
			graphics.drawImage(this.image, 0, 0, this.BG_WIDTH, this.BG_HEIGHT, (2*(this.BG_WIDTH) - this.position), 0, this.BG_WIDTH, this.BG_HEIGHT);
			graphics.drawImage(this.image, 0,	0, this.BG_WIDTH, this.BG_HEIGHT, (2*(this.BG_WIDTH) - this.position), this.BG_HEIGHT, this.BG_WIDTH, this.BG_HEIGHT);
		}
		
	};
	
};


/**
* @class Animation
*
* @param image
* @param numFrame
*/
var Animation = function(x,y,z,collisionGroups,collisionFilters, hitBox, image, numFrame) {
	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox);
	
    this.image = image;
    this.numFrame = numFrame;
	
	this.update = function(){
		this.checkCoordinates("Function update, undefined coordinates");
		this.numFrame += 1;
    }
	
};


/**
* @class Bullet
*
* @param angle Angle of the shoot in ?????????
*/
var Bullet = function(x,y,z,collisionGroups,collisionFilters, hitBox, angle) {
	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox);
	
	this.bulletId = 1;
	
	if(angle == undefined)
	{
		angle = 0
	}
	
	this.speed = 10;
	this.speedX =  Math.round(this.speed*Math.cos(angle));
	this.speedY =  Math.round(this.speed*Math.sin(angle));
	
	
	//TODO: Remove when AssetManager is implemented
	if(typeof AssetManager == 'undefined'){
		this.image= new Image();
		switch(this.bulletId)
		{
			default:
			case 1:
				this.image.src = "./images/Bullet01.png";
			break;
			case 2:
				this.image.src = "./images/Bullet02.png";
			break;
		}
	}

	this.update = function(){
		this.checkCoordinates("Function update, undefined coordinates");
		this.x += this.speedX;
		this.y += this.speedY;
    }
	
	this.render = function(g){
		this.checkCoordinates("Function render undefined coordinates");
        if(g == undefined){alert("Function render undefined parameter g (HTMLCanvas2DContext)");}
		if(typeof AssetManager == 'undefined')
		{
			g.drawImage(this.image, this.x, this.y);
		}
		else
		{
			switch(this.bulletId)
			{
				default:
				case 1:
					g.drawImage(AssetManager.getInstance().getImage("bullet1"), this.x, this.y);
				break;
				case 2:
					g.drawImage(AssetManager.getInstance().getImage("bullet2"), this.x, this.y);
				break;
			}
		}
    }
	
	
};


/**
* @class BulletFactory
*
*
*/
var BulletFactory = function() {

	this.createBullet(weaponId) = function(){
    }
	
};

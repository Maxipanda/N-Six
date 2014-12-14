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
	
};


/**
* @class InfiniteBackground
*
* @param image
* @param virtualDepth
* @param offsetX
* @param offsetY
*/
var InfiniteBackground = function(x,y,z,collisionGroups,collisionFilters, hitBox, image, virtualDepth,offsetX, offsetY) {
	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox);
	
    this.image = image;
    this.virtualDepth = virtualDepth;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
	
	this.update = function(){
		this.checkCoordinates("Function update, undefined coordinates");
    }
	
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
    }
	
};


/**
* @class Bullet
*
* @param angle Angle of the shoot in ?????????
*/
var Bullet = function(x,y,z,collisionGroups,collisionFilters, hitBox, angle) {
	GameEntity.call(this, x,y,z,collisionGroups,collisionFilters, hitBox);
	
    this.angle = angle;
	
	this.update = function(){
		this.checkCoordinates("Function update, undefined coordinates");
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

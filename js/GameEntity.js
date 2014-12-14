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
    this.x = x,
    this.y = y,
    this.z = z,
    this.collisionGroups = collisionGroups,
    this.collisionFilters = collisionFilters,
    this.hitBox = hitBox,
	
    this.canCollideWith = function(e){
		if(e == undefined)
		{
			alert("Function canCollideWith undefined e (parameter GameEntity)");
		}
        return false;
    }
	
    this.update = function(){
        
    }
	
    this.render = function(g){
        if(g == undefined)
		{
			alert("Function render undefined parameter g (HTMLCanvas2DContext)");
		}
    }
	
    this.hitTest = function(entity){
		if(entity == undefined)
		{
			alert("Function hitTest undefined parameter entity (GameEntity)");
		}
        return false;
    }
}
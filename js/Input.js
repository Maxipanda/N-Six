function Input( ){
	this.down = 40; //KEY_DOWN;
	this.up= 38;// KEY_UP;
	this.left = 37; //KEY_LEFT;
	this.right = 39; // KEY_RIGHT;
	this.shoot= 32; //KEY_SPACE;
	this.weapon_1= 49; // KEY_PF1;
	this.weapon_2= 50; //KEY_PF2;
	
	this.isDown=false ; 
	this.isUp=false;
	this.isLeft=false;
	this.isRigth=false;
	this.isShoot=false; 
	this.isWeapon_1=false;
	this.isWeapon_2=false;

	this.getDown=function(){
		return this.down;}
	this.getUp=function(){
		return this.up;}
	this.getLeft=function(){
		return this.left;}
	this.getRight=function(){
		return this.right;}
	this.getShoot=function(){
		return this.shoot;}
	this.getWeapon_1=function(){
		return this.weapon_1;}
	this.getWeapon_2=function(){
		return this.weapon_2;}



	this.iskeyCode=function(key){

		if ( key == this.getDown()){return isDown;}
		
		if ( key == this.getLeft()){return isLeft;}
		
		if ( key == this.getUp()){return isUp;}
	
		if ( key == this.getRight()){return isRigth;}
		
		if ( key == this.getShoot()){return isShoot;}
		
		if ( key == this.getWeapon_1()){return isWeapon_1;}
		
		if ( key == this.getWeapon_2()){return isWeapon_2;}
		
	};

	this.onKeyDown = function(event){
		
		var key= event.keyCode;
	
		if (key == this.getDown()){ isDown=true;}
		
		if ( key == this.getLeft()){isLeft=true;}
		
		if ( key == this.getUp()){isUp=true; }
		
		if ( key == this.getRight()){isRigth=true;}
		
		if ( key == this.getShoot()){isShoot=true;}
		
		if ( key == this.getWeapon_1()){isWeapon_1=true;}
		
		if ( key == this.getWeapon_2()){isWeapon_2=true;}
	
	};
	
	this.onKeyUp = function(event){
		
		var key= event.keyCode;
	
		if (key == this.getDown()){ isDown=false;}
		
		if ( key == this.getLeft()){isLeft=false;}
		
		if ( key == this.getUp()){isUp=false;}
		
		if ( key == this.getRight()){isRigth=false;}
		
		if ( key == this.getShoot()){isShoot=false;}
		
		if ( key == this.getWeapon_1()){isWeapon_1=false;}
		
		if ( key == this.getWeapon_2()){isWeapon_2=false;}
	};
}

var input = new Input();

document.onkeydown = function(event) {
	input.onKeyDown(event);
};

document.onkeyup = function(event) {
	input.onKeyUp(event);
};

	
	
	
	

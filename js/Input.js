var Input = (function() {
    var constructeur = function() {
        var down = 40;     // KEY_DOWN;
        var up = 38;       // KEY_UP;
        var left = 37;     // KEY_LEFT;
        var right = 39;    // KEY_RIGHT;
        var shoot = 32;    // KEY_SPACE;
        var weapon_1 = 49; // KEY_PF1;
        var weapon_2 = 50; // KEY_PF2;
        
        var isDown = false ; 
        var isUp = false;
        var isLeft = false;
        var isRigth = false;
        var isShoot = false; 
        var isWeapon_1 = false;
        var isWeapon_2 = false;

        this.getDown = function() {return this.down;}
        this.getUp = function() {return this.up;}
        this.getLeft = function() {return this.left;}
        this.getRight = function() {return this.right;}
        this.getShoot = function() {return this.shoot;}
        this.getWeapon_1 = function() {return this.weapon_1;}
        this.getWeapon_2 = function() {return this.weapon_2;}

        this.iskeyCode = function(key) {

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

	var instance = null;
	return new function() {
		this.getInstance = function() {
			if(instance == null) {
				instance = new constructeur();
				instance.constructeur = null;
                
                document.onkeydown = function(event) {
                    instance.onKeyDown(event);
                };

                document.onkeyup = function(event) {
                    instance.onKeyUp(event);
                };
			}
 
			return instance;
		};
	}
})();

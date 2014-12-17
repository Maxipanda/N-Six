
  
  var Input = (function() {
    var constructeur = function() {
        this.down = 40;     // KEY_DOWN;
        this.up = 38;       // KEY_UP;
        this.left = 37;     // KEY_LEFT;
        this.right = 39;    // KEY_RIGHT;
        this.shoot = 32;    // KEY_SPACE;
        this.weapon_1 = 49; // KEY_PF1;
        this.weapon_2 = 50; // KEY_PF2;
        
        this.isDown = false ; 
        this.isUp = false;
        this.isLeft = false;
        this.isRigth = false;
        this.isShoot = false; 
        this.isWeapon_1 = false;
        this.isWeapon_2 = false;

        this.iskeyCode = function(key) {

            if ( key == this.down){return this.isDown;}
            else if ( key == this.left){return this.isLeft;}
            else if ( key == this.up){return this.isUp;}
            else if ( key == this.right){return this.isRigth;}
            else if ( key == this.shoot){return this.isShoot;}
            else if ( key == this.weapon_1){return this.isWeapon_1;}
            else if ( key == this.weapon_2){return this.isWeapon_2;}
            else {
                console.log("Touche non reconnue");
                return false;
            }
            
        };

        this.onKeyDown = function(event) {
            
            var key = event.keyCode;

            if (key == this.down) this.isDown = true;
            else if (key == this.left) this.isLeft = true;
            else if (key == this.up) this.isUp = true;
            else if (key == this.right) this.isRigth = true;
            else if (key == this.shoot) this.isShoot = true;
            else if (key == this.weapon_1) this.isWeapon_1 = true;
            else if (key == this.weapon_2) this.isWeapon_2 = true;
            else console.log("La touche n'existe pas");
        
        };
        
        this.onKeyUp = function(event) {
            
            var key = event.keyCode;

            if (key == this.down) this.isDown = false;
            else if (key == this.left) this.isLeft = false;
            else if (key == this.up) this.isUp = false;
            else if (key == this.right) this.isRigth = false;
            else if (key == this.shoot) this.isShoot = false;
            else if (key == this.weapon_1) this.isWeapon_1 = false;
            else if (key == this.weapon_2) this.isWeapon_2 = false;
            else console.log("La touche n'existe pas");
        
        };
    };

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


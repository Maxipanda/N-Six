var AssetManager = (function() {
	var constructeur = function() {
		
		var images = {}, audios = {};
		var successCount = 0, errorCount = 0;
		var loaded = false;
		
		this.addImage = function(id, src) {
			images[id] = src;
		};
		
		this.getImage = function(id) {
			return images[id];
		};
		
		this.addAudio = function(id, src) {
			audios[id] = src;
		};
		
		this.getAudio = function(id) {
			return audios[id];
		};
		
		this.isFinishedLoading = function() {
			return (Object.keys(images).length + Object.keys(audios).length == successCount + errorCount);
		};
		
		this.load = function(callback) {
			if(Object.keys(images).length + Object.keys(audios).length == 0) {
				callback();
				loaded = true;
				console.log("Aucun asset à charger");
				
			}
			for(var key in images) {
				var path = images[key];
				var img = new Image();
				var that = this;

				img.addEventListener("load", function() {
					successCount += 1;
					if(that.isFinishedLoading()) {
						callback();
						loaded = true;
						console.log("Les assets ont bien été chargées. Succès: " + successCount + ", Erreurs: " + errorCount);
					}
				}, false);
				img.addEventListener("error", function() {
					errorCount += 1;
					if(that.isFinishedLoading()) {
						callback();
						loaded = true;
						console.log("Les assets ont bien été chargées. Succès: " + successCount + ", Erreurs: " + errorCount);
					}
				}, false);
				img.src = path;
				images[key] = img;
			}
			for(var key in audios) {
				var path = audios[key];
				var audio = document.createElement('audio');
				var that = this;
				
				audio.addEventListener('canplaythrough', function() {
					successCount += 1;
					if(that.isFinishedLoading()) {
						callback();
						loaded = true;
						console.log("Les assets ont bien été chargées. Succès: " + successCount + ", Erreurs: " + errorCount);
					}
				}, false);
				audio.addEventListener('error', function() {
					errorCount += 1;
					if(that.isFinishedLoading()) {
						callback();
						loaded = true;
						console.log("Les assets ont bien été chargées. Succès: " + successCount + ", Erreurs: " + errorCount);
					}
				}, false);
				audio.src = path;
				audios[key] = audio;
			}
		};
		this.init = function(callback) {
			if(!loaded) {
				this.addImage("img-bg1", "images/Background01.png");
				this.addImage("img-bg2", "images/Background02.png");
				this.addImage("img-bullet1", "images/Bullet01.png");
				this.addImage("img-bullet2", "images/Bullet02.png");
				this.addImage("img-bullet3", "images/Bullet03.png");
				this.addImage("img-enemy1", "images/Enemy01.png");
				this.addImage("img-enemy2", "images/Enemy02.png");
				this.addImage("img-explosion1", "images/Explosion01.png");
				this.addImage("img-spaceship1", "images/Spaceship01.png");
				this.addImage("img-spaceship2", "images/Spaceship02.png");
				this.addAudio("sound-explosion", "audio/fx/Explosion.mp3");
				this.addAudio("sound-loose", "audio/fx/Loose.mp3");
				this.addAudio("sound-weaponchange", "audio/fx/WeaponChange.mp3");
				this.addAudio("sound-level1", "audio/music/Level01.mp3");
				this.addAudio("sound-level2", "audio/music/Level02.mp3");
				this.load(callback);
			}
		};
	};
 
	var instance = null;
	return new function() {
		this.getInstance = function() {
			if(instance == null) {
				instance = new constructeur();
				instance.constructeur = null;
			}
 
			return instance;
		};
	}
})();

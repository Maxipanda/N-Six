var AssetManager = (function() {
	var constructeur = function() {
		
		var images = {}, audios = {};
		var successCount = 0, errorCount = 0;
		
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
			}
			for(var key in images) {
				var path = images[key];
				var img = new Image();
				var that = this;
				
				img.addEventListener("load", function() {
					console.log("load callback");
					successCount += 1;
					if(that.isFinishedLoading()) {
						callback();
					}
				}, false);
				img.addEventListener("error", function() {
					console.log("error callback");
					errorCount += 1;
					if(that.isFinishedLoading()) {
						callback();
					}
				}, false);
				img.src = path;
				images[key] = img;
			}
		};
	};
 
	var instance = null;
	return new function() {
		this.getInstance = function() {
			if (instance == null) {
				instance = new constructeur();
				instance.constructeur = null;
			}
 
			return instance;
		};
	}
})();

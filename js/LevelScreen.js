function LevelScreen(){
	
	this.imageBg = new Image();
	this.imageBg.src = "images/Background01.png";
	this.posBg = 0;
	this.speedBg = 2;
	
	this.CANVAS_WIDTH;
	this.CANVAS_HEIGHT;
	this.BG_WIDTH;
	this.BG_HEIGHT;
	
	this.update = function(){
		
		// Update background position
		
		this.posBg+=this.speedBg;
		if(this.posBg >= BG_WIDTH)
			this.posBg = 0;
	}
	
	this.render = function(graphics){
		
		// Clear canvas
		
		graphics.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		
		// Display background
		
		graphics.drawImage(this.imageBg, this.posBg,0, BG_WIDTH - this.posBg, BG_HEIGHT, 0, 0, BG_WIDTH - this.posBg, BG_HEIGHT);
		graphics.drawImage(this.imageBg, 0, 0, BG_WIDTH, BG_HEIGHT, BG_WIDTH - this.posBg, 0, BG_WIDTH, BG_HEIGHT);
		graphics.drawImage(this.imageBg, this.posBg,0, BG_WIDTH - this.posBg, BG_HEIGHT, 0, BG_HEIGHT, BG_WIDTH - this.posBg, BG_HEIGHT);
		graphics.drawImage(this.imageBg, 0,	0, BG_WIDTH, BG_HEIGHT, BG_WIDTH - this.posBg, BG_HEIGHT, BG_WIDTH, BG_HEIGHT);
		
		if(this.posBg > 2*BG_WIDTH-CANVAS_WIDTH){
		
			graphics.drawImage(this.imageBg, 0, 0, BG_WIDTH, BG_HEIGHT, (2*BG_WIDTH - this.posBg), 0, BG_WIDTH, BG_HEIGHT);
			graphics.drawImage(this.imageBg, 0,	0, BG_WIDTH, BG_HEIGHT, (2*BG_WIDTH - this.posBg), BG_HEIGHT, BG_WIDTH, BG_HEIGHT);
		}
		
	};
	
};

/*function testLevelScreen(){
	

	var level = new LevelScreen();
	
	var canvas = document.getElementById("canvasGame");
	var ctx = canvas.getContext("2d");
	
	var interval = setInterval(function(){
		level.update();
		level.render(ctx);	
	}, 1000/60);
	
};*/
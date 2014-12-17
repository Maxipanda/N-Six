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

/*function testRectangle(){
	
	var rect1 = new Rectangle(0, 0, 5, 5);
	var rect2 = new Rectangle(1, 1, 6, 6);
	
	console.log("Test rect1.intersect(rect2)");
	
	var tmp = rect1.intersect(rect2);
	
	if(tmp) console.log("Intersection Vrai");
	else console.log("Intersection Fausse");
	
	console.log("Test rect2.moveTo(6, 1)");
	
	rect2.moveTo(6, 1);
	
	console.log("Test rect1.intersect(rect2)");
	
	tmp = rect1.intersect(rect2);
	
	if(tmp) console.log("Intersection Vrai");
	else console.log("Intersection Fausse");
	
	console.log("Test rect1.moveTo(4, 4)");
	
	rect1.moveTo(4, 4);
	
	console.log("Test rect2.intersect(rect1)");
	
	tmp = rect2.intersect(rect1);
	
	if(tmp) console.log("Intersection Vrai");
	else console.log("Intersection Fausse");
		
}*/
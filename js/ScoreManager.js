function ScoreManager (){
	this.score=0;
	
	this.getScore = function(){
		return this.score;
	};
	
	this.addscore = function(score){
		this.score += score;
	};

}

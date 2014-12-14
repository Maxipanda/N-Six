
/* 
///////////////////////// AIDE \\\\\\\\\\\\\\\\\\\\\\\\\\\
Pour creer un objet et l'instancier en Javascript avec attributs et méthodes :

function UneClasse(paramA, paramB){
    this.attributA = paramA,
    this.attributB = paramB,
    this.getA = function(){
        return this.attributA;
    }
}
 
var instance1 = new UneClasse();
*/






function initialisation() {
    var gameCanvas = document.createElement("canvas");
    gameCanvas.setAttribute("id", "gameCanvas");
    document.getElementById("content").appendChild(gameCanvas);
    console.log("End of initialisation...")
}

function mainLoop() {


}

function updatePhase() {


}

function renderPhase() {


}
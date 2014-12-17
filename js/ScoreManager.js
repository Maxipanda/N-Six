var ScoreManager = (function() {
    
    function getXMLHttpRequest() {
        var xhr = null;
        if (window.XMLHttpRequest || window.ActiveXObject) {
            if (window.ActiveXObject) {
                try {
                    xhr = new ActiveXObject("Msxml2.XMLHTTP");
                } catch(e) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
            } else {
                xhr = new XMLHttpRequest(); 
            }
        } else {
            alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
            return null;
        }
        return xhr;
    }
    
    var constructeur = function() {
        this.score = 0;
        
        this.getScore = function() {
            return this.score;
        };
        
        this.addscore = function(score) {
            this.score += score;
        };
        
        this.sendScore = function() {
            var name = window.prompt("Enregistrement du score", "Anonyme");
            var xhr = getXMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                    console.log("Réponse du serveur de score: " + xhr.responseText);
                    window.location("show.php");
                }
            };
            console.log("Envoi du score à l'adresse suivante: " + "add.php?score=" + this.score + "&name=" + name);
            xhr.open("GET", "add.php?score=" + this.score + "&name=" + name, true);
            xhr.send(null);
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





var playerHealth=40;
var grantHealth=10;
var grantLives=3;
var name = "";
var newRound = ""; 

function startGame(){
	var play = prompt("Do you want to play?");
	if (play === "yes"){
		name = prompt("What is your name?");
		startCombat()
	}else {
		console.log("Maybe next time"); 
	}
}


function startCombat(){
	while(playerHealth >= 0 && grantLives > 0){
	  function getDamage(){
    	return Math.floor((Math.random() * 5) + 1);
  }
		newRound = prompt("Would you like to attack or quit?");
		if(newRound === "attack"){
		  
    	grantHealth -= getDamage();
    	console.log("Grant has " + grantHealth + " hitpoints remaining");
    	playerHealth -= getDamage();
    	console.log(name + " has " + playerHealth + " hitpoints remaining");
		} else if(newRound === "quit"){
			break; 
		}
		if (grantHealth<=0){
		grantLives--; console.log("Grant now has " + grantLives + " lives left.");
		grantHealth = 10;
		}
		if (grantLives===0){
		  console.log("You now have won the battle!");
		}
		if(playerHealth <= 0){
			console.log("You have lost the battle");
			break;
		}
	}
}



startGame();

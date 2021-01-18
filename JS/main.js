const lib = require("./lib.js");

console.log("Welcome in Snake And Ladder Simulator Program")

let playerOnePosition = 0;
let winPoint = 100;
let playGame = 0;

while(playerOnePosition < 100){
    let random = lib.rollDice();
    let option = lib.checkOptions();
    playGame++;
    switch(option){
        case 1:
            console.log("Palyer not play");
            break;
        case 2:
            console.log("Player got the ladder");
            playerOnePosition += random;
            // In case the Player position go above 100,the player stay in the same previous
				// position till the player gets no that adds to 100.
			if (playerOnePosition > 100) {
				playerOnePosition -= random;
			}
            break;
        case 3:
            console.log("oops! Palyer got the snake");
            playerOnePosition -= random;
            //In case the player position moves below 0, then the player restarts from 0
                if (playerOnePosition < 0) {
                   playerOnePosition = 0;
                } 
                break;
        default:
            console.log("Something Wrong");          
    }

    console.log("Player 1 position is:" + playerOnePosition)
    if(playerOnePosition < 100){
        continue;
    }else{
        console.log("Number of time the dice Was Palyed by player1: " + playGame + " times");
        break;
    }
}
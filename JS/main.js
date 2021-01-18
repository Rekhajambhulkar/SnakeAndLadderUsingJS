console.log("Welcome in Snake And Ladder Simulator Program")

rollDice = () => {
    return Math.floor(Math.random() *  10) % 6 + 1;
    }
checkOptions = () => {
    return Math.floor(Math.random() * 10) % 3 + 1;
}

let playerOnePosition = 0;
let playerTwoPosition = 0;
let WinPoint = 100;
let PlayGame2 = 0;
var playGame1 = 0;

while(playerOnePosition < WinPoint && playerTwoPosition < WinPoint) {
    console.log("========PlayerOne turn=========");
    let random = rollDice();
    playGame1++;
    let option = checkOptions();
    switch(option){
        case 1:
            console.log("Palyer1 not play");
            break;
        case 2:
            console.log("Player1 got the ladder");
            playerOnePosition += random;
            // In case the Player position go above 100,the player stay in the same previous
				// position till the player gets no that adds to 100.
			if (playerOnePosition > 100) {
				playerOnePosition -= random;
			}
            break;
        case 3:
            console.log("oops! Palyer1 got the snake");
            //In case the player position moves below 0, then the player restarts from 0
                if (playerOnePosition - random < 0) {
                   playerOnePosition = 0;
                } 
                break;
        default:
            console.log("Something Wrong");          
    }

    console.log("Player 1 position is:" + playerOnePosition)

    console.log("========PlayerTwo turn========")
    random = rollDice();
    PlayGame2++;
    option = checkOptions();
    switch(option){
        case 1:
            console.log("Palyer2 not play");
            break;
        case 2:
            console.log("Player2 got the ladder");
            playerTwoPosition += random;
            // In case the Player position go above 100,the player stay in the same previous
				// position till the player gets no that adds to 100.
			if (playerTwoPosition > WinPoint) {
				playerTwoPosition = 100;
			}
            break;
        case 3:
            console.log("oops! Palyer got the snake");
            playerTwoPosition -= random;
            //In case the player position moves below 0, then the player restarts from 0
                if (playerTwoPosition < 0) {
                   playerTwoPosition = 0;
                }
                break;
        default:
            console.log("Something Wrong");          
    }
    console.log("Player 2 position is:" + playerTwoPosition)


    if(playerOnePosition == 100 || playerTwoPosition == 100){
        if(playerOnePosition == 100){
        console.log("Congratulation Player1 is won");
        console.log("Number of time the Dice was Played by Player1:" + PlayGame1 + "times");
    } else {
        console.log("Congratulation Player2 is won");
        console.log("Number of time the Dice was Played by Player2:" + PlayGame2 + "times");

    }
    break;
  }
}

module.exports = {rollDice, checkOptions}

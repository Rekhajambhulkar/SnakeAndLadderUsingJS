const lib = require("./lib")

console.log("Welcome in Snake And Ladder Simulator Program")

let playerOnePosition = 0;
let random = lib.rollDice();
//console.log(random)
let option = lib.checkOptions();
switch(option){
    case 1:
        console.log("Palyer not play");
        break;
    case 2:
        console.log("Player got the ladder");
        playerOnePosition += random;
        break;
    case 3:
        console.log("oops! Palyer got the snake");
        playerOnePosition -= random;
        break;
    default:
        console.log("Something Wrong");          
}

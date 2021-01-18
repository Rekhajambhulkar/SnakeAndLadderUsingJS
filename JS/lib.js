
    rollDice = () => {
        return Math.floor(Math.random() *  10) % 6 + 1;
        }
    
    checkOptions = () => {
        return Math.floor(Math.random() * 10) % 3 + 1;
    }

module.exports = {rollDice, checkOptions}


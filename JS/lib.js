module.exports.rollDice = () => {
    return Math.floor(Math.random() *  10) % 6 + 1;
    }

module.exports.checkOptions = () => {
    return Math.floor(Math.random() * 10) % 3 + 1;
}
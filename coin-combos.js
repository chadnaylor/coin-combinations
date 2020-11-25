var makeChange = function (total) {
    let coins = [1, 2, 5, 10, 20, 50, 100, 200]
    let solutions = 0
    let recurse = (coin, remainder) => {
        let current = coins[coin]
        if (coin === 0) {
            remainder % current === 0 && solutions++
            return;
        }
        while (remainder >= 0) {
            recurse(coin - 1, remainder)
            remainder -= current
        }
    }
    recurse(coins.length - 1, total)
    return solutions
};
makeChange(2)
module.exports = makeChange

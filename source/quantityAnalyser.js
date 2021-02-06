console.log(`welcome to quantity analyser`)
class QuantityAnalyser {
    compareLengths = (quantity1, quantity2) => {
        if (quantity1 == quantity2) {
            return true;
        }
        return false;
    }
}
module.exports = new QuantityAnalyser();

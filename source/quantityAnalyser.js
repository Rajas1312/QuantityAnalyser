console.log(`welcome to quantity analyser`)
class QuantityAnalyser {
    compareLengths = (quantity1, quantity2) => {
        if (quantity1 == quantity2) {
            return true;
        }
        return false;
    }
    addLengths = (quantity1, quantity2) => {
        let quantity = quantity1 + quantity2
        return quantity
    }
}
module.exports = new QuantityAnalyser();

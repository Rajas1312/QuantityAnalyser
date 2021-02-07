let yard = 1;
let foot = (1 / 3) * yard;
let inch = (1 / 36) * yard;
let inch1 = 1
let centimeter = (2 / 5) * inch1
let ml = 1;
let litre = 1000 * ml;
let gallon = 3.78 * litre
let grams = 1;
let kilos = 1000 * grams;
let tons = 1000 * kilos

class Unit {
    getYard = () => {
        return yard;
    }
    getFoot = () => {
        return foot
    }
    getInch = () => {
        return inch;
    }
    getCentimeter = () => {
        return centimeter;;
    }
    getInch1 = () => {
        return inch1;
    }
    getGallons = () => {
        return gallon;
    }
    getLitre = () => {
        return litre;
    }
    getMl = () => {
        return ml;
    }
    getGrams = () => {
        return grams;
    }
    getKilos = () => {
        return kilos;
    }
    getTons = () => {
        return tons;
    }

}
module.exports = new Unit();

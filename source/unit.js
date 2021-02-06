let yard = 1;
let foot = (1 / 3) * yard;
let inch = (1 / 36) * yard;
inch1 = 1
let centimeter = (2 / 5) * inch1


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

}
module.exports = new Unit();

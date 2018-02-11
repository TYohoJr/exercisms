//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
newYear = input;
};

Year.prototype.isLeap = function () {
    if ((newYear % 400 == 0) && (newYear % 100 == 0)){
        return true;
    } else if (newYear % 100 == 0) {
        return false;
    } else if (newYear % 4 == 0) {
        return true;
    } else {
        return false;
    }

};

module.exports = Year;

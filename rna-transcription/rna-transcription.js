
var DnaTranscriber = function() {
   // var dnaSample = input;
};

DnaTranscriber.prototype.toRna = function(input) {
    var result = "";
    for (var i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "G":
                result += "C";
                break;
            case "C":
                result += "G";
                break;
            case "T":
                result += "A";
                break;
            case "A":
                result += "U";
                break;
            default:
                throw Error("Invalid input"); 
        }
    }
    return result;    
}

module.exports = DnaTranscriber;
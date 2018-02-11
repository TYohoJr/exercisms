var Pangram = function(input){
    inputString = input;
}

Pangram.prototype.isPangram = function(){
    var allLetters = "abcdefghijklmnopqrstuvwxyz";
    var result = false;
    inputString = inputString.toLowerCase();
    if (inputString != undefined){
        for (var i = 0; i < inputString.length; i++){
            for (var j = 0; j < allLetters.length; j++){
                if (inputString[i] == allLetters[j]){
                    allLetters = allLetters.replace(allLetters[j], "");
                }
            }
        }
        if (allLetters == ""){
            result = true;
        }    
    }
    return result;
}

module.exports = Pangram;

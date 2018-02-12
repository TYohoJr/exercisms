var Bob = function(){
}

Bob.prototype.hey = function(inputString) {
    var result = "";
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] == "/") {
            inputString = inputString.slice()
        }
    }
    if ((inputString.toUpperCase() == inputString) && (inputString.match(/[a-z]/i) != null)) {
        result = "Whoa, chill out!";
    } else if ((inputString.charAt(inputString.length - 1)) == "?") {
        result = "Sure.";
    } else if (inputString == "" || inputString.replace(/ /g, "") == "") {
        result = "Fine. Be that way!"
    } else {
        result = "Whatever.";
    }
    return result;
}

//console.log(Bob.prototype.hey("QWE?"));

var testString = "abcdef\tgh";
console.log(testString);
testString = testString.split("\\")
//testString = testString.slice(2, 3) + testString.slice(3);
console.log(testString);


module.exports = Bob;

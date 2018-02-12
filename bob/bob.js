var Bob = function(){
}

Bob.prototype.hey = function(inputString) {
    var result = "";
    //for (var i = 0; i < inputString.length; i++) {
      //  if (inputString[i] == "/") {
        //    inputString = inputString.slice()
        //}
    //}
    if ((inputString.toUpperCase() == inputString) && (inputString.match(/[a-z]/i) != null)) {
        result = "Whoa, chill out!";
    } else if ((inputString.charAt(inputString.length - 1)) == "?") {
        result = "Sure.";
    } else if ((inputString == "") || (inputString.replace(/ /g, "") == "")) {
        result = "Fine. Be that way!"
    } else if ((inputString = inputString.replace(/\\/g, "")) == "") {
        result = "test";
    } else {
        if ((inputString.replace(/\\/g, "") == undefined)) {
            console.log("testestes")
        }
        result = "Whatever.";
    }
    return result;
}

console.log(Bob.prototype.hey("\t\t\t\t"));

//var testString = "abcdef\tgh";
//console.log(testString);
//testString = testString.split("\\")
//testString = testString.slice(2, 3) + testString.slice(3);
//console.log(testString);


module.exports = Bob;

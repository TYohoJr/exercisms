
var reverseString = function(myStr) {
    if(myStr === "") {
        return myStr;
    } else {
       return myStr.split("").reverse().join("")
    }
}

module.exports = reverseString;
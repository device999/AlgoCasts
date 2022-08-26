// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var responseMap = new Map();
    for(let z =0; z < str.length;z++){
        if(responseMap.has(str[z])){
            let val = responseMap.get(str[z]);
            responseMap.set(str[z], val+1);
        }else{
            responseMap.set(str[z], 1);
        }
    }
    var resp = str[0];
    var maxRepeats = responseMap.get(str[0]);
    for (var [key, val] of responseMap) {
            if(val > maxRepeats){
                resp = key;
                maxRepeats = val;
            }
    }
    return resp;
}

module.exports = maxChar;

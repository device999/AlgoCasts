// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const arr = n.toString().split('').reduce((adjusted, currVal) => {
        if(adjusted == '' && currVal == '0'){
            return '';
        }else{
            return adjusted + currVal;
        }
    },'');
}

module.exports = reverseInt;

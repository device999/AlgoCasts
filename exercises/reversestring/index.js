// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var reply = '';
    debugger;
    for(let z =0; z < str.length;z++){
        reply = str[z] + reply;
    }
    return reply;
}


function reverseSol(str){
    return str.split('').reverse().join('');
}

function complexReverse(str){
    return str.split('').reduce((reversed, character) =>{
        return character + reversed;
    },'')
}

reverse('sattar');
module.exports = reverse;

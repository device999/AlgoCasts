// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var arr = str.split(' ');
    return arr.map((element) => {
         return element[0].toUpperCase() + element.substring(1,element.length);
    }).join(' ');
    
}


module.exports = capitalize;

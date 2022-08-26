// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var ln = 2*n - 1;
    var max = n;
    for(let i=1; i<n+1;i++){
        var cage = 2*i-1;
        var backspace = ((2*n-1)-cage)/2
        var grid = '#'.repeat(cage);
        var blanks = ' '.repeat(backspace);
        var response = blanks+grid+blanks;
        console.log(response);
    }

}

module.exports = pyramid;

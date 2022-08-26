// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(let i=1; i<n+1;i++){
        var grid = '#'.repeat(i);
        var blanks = ' '.repeat(n-i);
        var resp = grid+blanks;
        console.log(resp)
    }
}

module.exports = steps;

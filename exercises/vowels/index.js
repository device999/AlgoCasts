// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var vowel = 0
    for (let i in str) {
        if(str[i]=='i' || str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]=='u' ){
            vowel++;
        }
      }
      return vowel;
}

module.exports = vowels;

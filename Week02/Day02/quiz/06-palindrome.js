
function isPalindrome(word) {
  word = word.toLowerCase().split('')
  return word.join('') === word.reverse().join('')
}

console.log(isPalindrome('kasur ini rUsak'));//true
function isCharsUnique(string){
  // for (let i = 0; i < string.length; i++) {
  //   for (let j = 0; j < string.length; j++) {
  //     if(i==j) continue
  //     if(string[i]==string[j]) return false
  //   }
  // }
  // return true
  string = string.split('').sort()
  for (let i = 0; i < string.length-1; i++) {
    if(string[i]==string[i+1]) return false
  }
  return true
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false
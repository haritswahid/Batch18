function maxWordLength(params) {
  let counter = 0
  let longest = ['', 0]
  word = params.split(' ')
  const max =  word.filter(a=> a.length == Math.max(...word.map(d=> d.length)))[0]

  // while (counter < word.length) {
  //   if (longest[1] < word[counter].length) longest = [word[counter], word[counter].length]
  //   counter++
  // }
  return max
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp
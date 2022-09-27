
function showPrimeNumber(n){
  let result = ''
  let counter = 0
  for (let i = 2; i < n; i++) {
    if(isPrime(i)){
      result += i.toString()+'\t'
      counter++
    }
    if(counter==5) {
      result += '\n'
      counter = 0
    }
  }
  return result
}

function isPrime(n){
  for (let i = 2; i < n; i++) {
    if(n%i==0) return false
  }
  return true
}

console.log(showPrimeNumber(100));
/**

2	  3	  5	  7	  11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */



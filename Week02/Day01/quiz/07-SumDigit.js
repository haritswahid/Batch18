/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){
  if(isNaN(n)){
    return `${n} is not number, try again...`
  }
  if(n>=10000){
    return `${n} harus lebih kecil dari 10000`
  }
  n = n.toString()
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += parseInt(n[i])
  }
  return total;
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...
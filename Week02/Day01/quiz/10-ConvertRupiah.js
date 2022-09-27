/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    let message = '';
    if(type==='yen'){
      message = `${money} yen = Rp.${money*130.120}`
    } else if(type==='usd'){
      message = `${money} usd = Rp.${money*14382.5}`
    } else if(type==='euro'){
      message = `${money} euro = Rp.${money*16000}`
    } else {
      message = "no match type currency"
    }
    return message
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency
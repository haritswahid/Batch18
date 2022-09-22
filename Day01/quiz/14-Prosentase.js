/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
  let message = ''
  if (isNaN(start) && isNaN(end)) {
    message = `${start} or ${end} harus dalam angka`
  } else if (isNaN(start)) {
    message = `${start} harus dalam angka`
  } else if (isNaN(end)) {
    message = `${end} harus dalam angka`
  } else {
    let tipe = start<end ? 'kenaikan' : 'penurunan'
    message = `Total ${tipe} income ${((end-start)/start*100).toFixed()}%`
  }
  return message
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%



/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let totalKabisat = 0
  while (year1<year2-1){
    totalKabisat += isKabisat(year1++) ? 1:0
    // console.log(year1);
  }
  return totalKabisat
}

function isKabisat(year) {
  return (0 == year % 4) && (0 != year % 100) || (0 == year % 400)
}

console.log(howManyKabisat(1997, 2021));
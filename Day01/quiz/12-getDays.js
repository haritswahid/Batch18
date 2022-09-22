/** Display year is kabisat and display month */

function getDays(month, year) {
  let message = ''
  if (isNaN(month) && isNaN(year)) {
    message = "inputan bulan & tahun harus dalam integer"
  } else if (isNaN(month)) {
    message = "inputan bulan harus dalam integer"
  } else if (isNaN(year)) {
    message = "inputan tahun harus dalam integer"
  } else {
    let kabisat = (0 == year % 4) && (0 != year % 100) || (0 == year % 400)
    let msgKabisat = kabisat ? `, ${year} adalah tahun kabisat` : ''
    const tanggal = new Date(year, month, 0)
    console.log(tanggal)
    let msgBulan = `This month has ${tanggal.getDate()} days`
    message = msgBulan + msgKabisat
  }
  return message
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari
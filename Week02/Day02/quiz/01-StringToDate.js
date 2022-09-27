/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
  s = s.split("/");
  if(s.some(function(e){return isNaN(e)})) return `${s} bad format date`
  let tgl = new Date( s[2], s[0] - 1, s[1]);
  return tgl.toString()
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date
/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return `${seconds} is not number`
  }
  seconds = Number(seconds)
  var day = Math.floor(seconds / (3600 * 24));
  var hour = Math.floor(seconds % (3600 * 24) / 3600);
  var minute = Math.floor(seconds % 3600 / 60);
  var second = Math.floor(seconds % 60);

  day = day > 0 ? day + " hari " : "";
  hour = hour > 0 ? hour + " jam " : "";
  minute = minute > 0 ? minute + " menit " : "";
  second = second > 0 ? second + " detik" : "";
  return day + hour + minute + second;
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik
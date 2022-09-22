/** buat segitiga  */ 

for (let i = 0; i < 6; i++) {
  if(i==0) continue
  let ap = ''
  for (let j = 1; j < 6 - i; j++) {
    ap += j.toString()+' '
  }
  console.log(ap);
} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for (let i = 0; i < 6; i++) {
  let ap = ''
  for (let j = 5 - i; j > 0; j--) {
    ap += j.toString()+' '
  }
  console.log(ap);
}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

